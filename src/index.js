import React, { Component } from "react";
import classNames from "classnames/bind";
import Media from "react-media";
// import   "./gridContainer.scss";
// const cx = classNames.bind(styles);

export const ReactColorSquare = props => {
  const { width, height, color, text } = props;
  return (
    <div
      style={{
        width: width || 100,
        height: height || 100,
        backgroundColor: color || "blue"
      }}
    >
      {text}
    </div>
  );
};

// interface GridContainerProperties  {
//     columnsDesktop?: number|string;
//     columnsMobile?: number|string;
//     gutterWidthDesktop?: number|string;
//     gutterWidthMobile?: number|string;
//     paddingDesktop?: number|string;
//     paddingMobile?: number|string;
//     smallBreakpoint?: number;
//     children?: any
// }

export class GridContainer extends Component {
  render() {
    const defaultGutterWidth = "20px";
    const smallBreakpoint = "800";
    return (
      <div>
        <Media
        query="(max-width: 599px)"
        //   minDeviceWidth={
        //     (this.props.smallBreakpoint
        //       ? this.props.smallBreakpoint
        //       : smallBreakpoint) + 1
        //   }
        >
          <div
            style={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: `repeat(${
                this.props.columnsDesktop
              }, calc(calc(100% - calc(calc(${this.props.columnsDesktop} - 1)*${
                this.props.gutterWidthDesktop
              }))/ ${this.props.columnsDesktop}))`,
              columnGap: this.props.gutterWidthDesktop
                ? this.props.gutterWidthDesktop
                : defaultGutterWidth,
              padding: this.props.paddingDesktop
            }}
          >
            {this.props.children}
          </div>
        </Media>
        {/*  <MediaQuery
          maxDeviceWidth={
            this.props.smallBreakpoint
              ? this.props.smallBreakpoint
              : configuration.smallScreenBreakPoint
          }
        >
          <div
            className={GridContainer}
            style={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: `repeat(${
                this.props.columnsMobile
              }, calc(calc(100% - calc(calc(${this.props.columnsMobile} - 1)*${
                this.props.gutterWidthMobile
                  ? this.props.gutterWidthMobile
                  : defaultGutterWidth
              }))/ ${this.props.columnsMobile}))`,
              columnGap: this.props.gutterWidthMobile
                ? this.props.gutterWidthMobile
                : defaultGutterWidth,
              padding: this.props.paddingMobile
            }}
          >
            {this.props.children}
          </div>
        </MediaQuery> */}
      </div>
    );
  }
}
