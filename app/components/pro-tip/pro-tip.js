"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var font_icons_1 = require("../../reusable/font-icons/font-icons");
var style = require("./pro-tip.css");
var ProTip = (function (_super) {
    __extends(ProTip, _super);
    function ProTip(props) {
        _super.call(this, props);
    }
    ProTip.prototype.render = function () {
        return (React.createElement("div", {className: "pro-tip " + style.proTip}, 
            React.createElement("div", {className: style.title}, 
                React.createElement(font_icons_1.FontIcon, {icon: "star", background: "#33d3d2", size: "medium"}), 
                React.createElement("span", null, "Pro Tip")), 
            React.createElement("div", {className: style.image}, 
                React.createElement("img", {src: "./assets/images/yoda.jpg"})
            ), 
            React.createElement("div", {className: style.text}, 
                React.createElement("span", null, "Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how. Luckily but minutes ask picture man perhaps are inhabit. How her good all sang more why."), 
                React.createElement("span", {className: style.readMore}, "... Read More"))));
    };
    return ProTip;
}(React.Component));
exports.ProTip = ProTip;
;
