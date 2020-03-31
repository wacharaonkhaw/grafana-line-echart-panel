import React, { PureComponent } from 'react';
import { PanelOptionsGroup, ColorPicker } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { SimpleOptions } from './types';
import TitleEditor from 'components/TitleEditor';
// import LegendEditor from 'components/LegendEditor';
// import AxisEditor from 'components/AxisEditor';
// import SeriesEditor from 'components/SeriesEditor';

export class SimpleEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  // onBackgroundColorChanged = (color: any) => {
  //   this.props.onOptionsChange({ ...this.props.options, backgroundColor: color });
  // };
  render() {
    const { data, options } = this.props;

    return (
      <div>
        {data.state === 'Done' ? (
          <div>
            <h5>Display</h5>
            {/* <div className="gf-form">
              <span className="gf-form-label width-10">Background Color</span>
              <div className="gf-form-input gf-size-auto">
                <ColorPicker color={options.backgroundColor} onChange={this.onBackgroundColorChanged} />
              </div>
            </div> */}
            <br />
            <PanelOptionsGroup title="Title">
              <div className="section gf-form-group">
                <TitleEditor {...this.props} />
              </div>
            </PanelOptionsGroup>
            {/* <PanelOptionsGroup title="Legend">
              <div className="section gf-form-group">
                <LegendEditor {...this.props} />
              </div>
            </PanelOptionsGroup>
            <PanelOptionsGroup title="Axis">
              <div className="section gf-form-group">
                <AxisEditor {...this.props} />
              </div>
            </PanelOptionsGroup> */}
            {/* {options.seriesList.length !== 0 ? (
            <PanelOptionsGroup title="Series">
                <div className="section gf-form-group">
                  <SeriesEditor {...this.props} />
                </div>
            </PanelOptionsGroup>
            ) : (
              <div></div>
            )} */}
          </div>
        ) : (
          <h3>Loading... 😀</h3>
        )}
      </div>
    );
  }
}
