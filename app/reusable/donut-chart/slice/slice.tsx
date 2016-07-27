/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ISliceProps, ISliceState} from "./slice.int";

/*
 * Import --------------------
 */

const getAnglePoint: any = (startAngle: number, endAngle: number, radius: number, x: number, y: number) => {
  let x1: number,
      y1: number,
      x2: number,
      y2: number;

  x1 = x + radius * Math.cos(Math.PI * startAngle / 180);
  y1 = y + radius * Math.sin(Math.PI * startAngle / 180);
  x2 = x + radius * Math.cos(Math.PI * endAngle / 180);
  y2 = y + radius * Math.sin(Math.PI * endAngle / 180);

  return { x1, y1, x2, y2 };
};

export class Slice extends React.Component<ISliceProps, ISliceState> {
    public compIsMounted: boolean;

    constructor(props: ISliceProps) {
        super(props);
        this.state = {
          path: "",
          x: 0,
          y: 0
        };
    }

    animate(): any {
      this.draw(0);
    }

    draw(s: any): any {
      if (!this.compIsMounted) {
          return;
      }
      let p: any = this.props, 
          path: any = [], 
          a: any, 
          b: any, 
          c: any, 
          self: any = this, 
          step: any;

      step = p.angle / (37.5 / 2);

      if (s + step > p.angle) {
        s = p.angle;
      }

      // Get angle points
      a = getAnglePoint(p.startAngle, p.startAngle + s, p.radius, p.radius, p.radius);
      b = getAnglePoint(p.startAngle, p.startAngle + s, p.radius - p.hole, p.radius, p.radius);

      path.push("M" + a.x1 + "," + a.y1);
      path.push("A" + p.radius + "," + p.radius + " 0 " + (s > 180 ? 1 : 0) + ",1 " + a.x2 + "," + a.y2);
      path.push("L" + b.x2 + "," + b.y2);
      path.push("A" + (p.radius - p.hole) + "," + (p.radius - p.hole) + " 0 " + (s > 180 ? 1 : 0) + ",0 " + b.x1 + "," + b.y1);

      // Close
      path.push("Z");

      this.setState({ path: path.join(" ") });

      if (s < p.angle) {
        setTimeout((): void => { self.draw(s + step); }, 16);
      } else if (p.showLabel) {
        c = getAnglePoint(p.startAngle, p.startAngle + (p.angle / 2), (p.radius / 2 + p.trueHole / 2), p.radius, p.radius);

        this.setState({
          x: c.x2,
          y: c.y2
        });
      }
    }

    render(): React.ReactElement<{}> {
      return (
        <g>
          <path 
            d={ this.state.path }
            fill={ this.props.fill }
            stroke={ this.props.stroke }
            strokeWidth={ this.props.strokeWidth ? this.props.strokeWidth : 3 }
          />
        </g>
      );
    }

    componentDidMount(): any {
      this.compIsMounted = true;
      this.animate();
    }

    componentWillUnmount(): any {
      this.compIsMounted = false;
    }
};
