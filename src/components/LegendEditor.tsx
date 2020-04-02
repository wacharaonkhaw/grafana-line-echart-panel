import React, { PureComponent } from 'react';
import { ColorPicker, FormField, Switch } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { SimpleOptions } from '../types';

export default class LegendEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  onShowLegendChanged = ({ target }: any) => {
    if (target.checked) {
      this.props.onOptionsChange({ ...this.props.options, isShowLegend: true });
    } else {
      this.props.onOptionsChange({ ...this.props.options, isShowLegend: false });
    }
  };

  onLegendTextColorChanged = (color: any) => {
    this.props.onOptionsChange({ ...this.props.options, legendTextColor: color });
  };

  onLegendTextFontSizeChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, legendTextFontSize: target.value });
  };

  onLegendBgColorChanged = (color: any) => {
    this.props.onOptionsChange({ ...this.props.options, legendBackgroundColor: color });
  };

  onLegendIconChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, legendIcon: target.value });
  };

  onLegendInfoChanged = ({ target }: any) => {
    this.props.options.legendList = [];
    this.props.options.seriesList = [];
    this.props.options.seriesData = '';
    this.props.onOptionsChange({ ...this.props.options, legendInfo: target.value });
  };

  onlegendTextLeftChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, legendTextLeft: target.value });
  };

  onlegendTextTopChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, legendTextTop: target.value });
  };

  onlegendTextAlignChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, legendTextAlign: target.value });
  };

  onLegendOrientChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, legendOrient: target.value });
  };

  render() {
    const { options, data } = this.props;
    return (
      <div>
        <Switch label="Show Legend" labelClass="gf-form-label width-7" onChange={this.onShowLegendChanged} checked={options.isShowLegend} />

        {options.isShowLegend && (
          <div>
            <div className="gf-form">
              <span className="gf-form-label width-7">Legend Data</span>
              <div className="gf-form-select-wrapper gf-size-auto">
                <select className="gf-form-input gf-size-auto" onChange={this.onLegendInfoChanged} value={options.legendInfo}>
                  {data?.series[0]?.fields?.map(item => (
                    <option value={item.name}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <FormField
              label="fontsize"
              labelWidth={7}
              inputWidth={5}
              type="number"
              onChange={this.onLegendTextFontSizeChanged}
              value={options.legendTextFontSize || ''}
            />
            <div className="gf-form">
              <span className="gf-form-label width-10">Text Color</span>
              <div className="gf-form-input gf-size-auto">
                <ColorPicker color={options.legendTextColor} onChange={this.onLegendTextColorChanged} />
              </div>
            </div>
            <div className="gf-form">
              <span className="gf-form-label width-10">Backgroud Color</span>
              <div className="gf-form-input gf-size-auto">
                <ColorPicker color={options.legendBackgroundColor} onChange={this.onLegendBgColorChanged} />
              </div>
            </div>
            <div className="gf-form">
              <span className="gf-form-label width-7">Legend Left</span>
              <div className="gf-form-select-wrapper gf-size-auto">
                <select className="gf-form-input gf-size-auto" onChange={this.onlegendTextLeftChanged} value={options.legendTextLeft}>
                  <option value="auto">Auto</option>
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>
            </div>
            <div className="gf-form">
              <span className="gf-form-label width-7">Legend Top</span>
              <div className="gf-form-select-wrapper gf-size-auto">
                <select className="gf-form-input gf-size-auto" onChange={this.onlegendTextTopChanged} value={options.legendTextTop}>
                  <option value="auto">Auto</option>
                  <option value="top">Top</option>
                  <option value="middle">Middle</option>
                  <option value="bottom">Bottom</option>
                </select>
              </div>
            </div>
            <div className="gf-form">
              <span className="gf-form-label width-7">Orient</span>
              <div className="gf-form-select-wrapper gf-size-auto">
                <select className="gf-form-input gf-size-auto" onChange={this.onLegendOrientChanged} value={options.legendOrient}>
                  <option value="vertical">Vertical</option>
                  <option value="horizontal">Horizontal</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
