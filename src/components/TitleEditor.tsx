import React, { PureComponent } from 'react';
import { FormField, ColorPicker, Switch } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { SimpleOptions } from '../types';

export default class TitleEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  // Title name
  onTitleTextChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, titleText: target.value });
  };

  // Font size
  onTextFontSizeChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, titleTextFontSize: target.value });
  };

  // Title color
  onTextColorChanged = (color: any) => {
    this.props.onOptionsChange({ ...this.props.options, titleTextColor: color });
  };

  // Show title
  onShowTitleChanged = ({ target }: any) => {
    if (target.checked) {
      this.props.onOptionsChange({ ...this.props.options, isShowTitle: true });
    } else {
      this.props.onOptionsChange({ ...this.props.options, isShowTitle: false });
    }
  };

  // Text horizontal
  onTitleTextHorizontalChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, titleTextHorizontal: target.value });
  };

  // Text vertical
  onTitleTextVerticalChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, titleTextVertical: target.value });
  };

  // Text Align
  // onTitleTextAlignChanged = ({ target }: any) => {
  //   this.props.onOptionsChange({ ...this.props.options, titleTextAlign: target.value });
  // };

  render() {
    const { options } = this.props;
    return (
      <div>
        {/* Set show title */}
        <Switch labelClass="gf-form-label width-7" label="Show title" onChange={this.onShowTitleChanged} checked={options.isShowTitle} />
        {options.isShowTitle && (
          <div>
            {/* Set title name */}
            <FormField 
              label="Title name" 
              labelWidth={7} 
              inputWidth={20} 
              type="text" 
              onChange={this.onTitleTextChanged} 
              value={options.titleText || ''} 
            />
            {/* Set font size */}
            <FormField
              label="Font size"
              labelWidth={7}
              inputWidth={5}
              type="number"
              onChange={this.onTextFontSizeChanged}
              value={options.titleTextFontSize || ''}
            />
            {/* Set title color */}
            <div className="gf-form">
              <span className="gf-form-label width-7">Title color</span>
              <div className="gf-form-input gf-size-auto">
                <ColorPicker 
                  color={options.titleTextColor} 
                  onChange={this.onTextColorChanged} 
                />
              </div>
            </div>
            {/* Set title's position as horizontal */}
            <div className="gf-form">
              <span className="gf-form-label width-10">Horizontal position</span>
              <div className="gf-form-select-wrapper gf-size-auto">
                <select className="gf-form-input gf-size-auto" onChange={this.onTitleTextHorizontalChanged} value={options.titleTextHorizontal}>
                  <option value="auto">Auto</option>
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>
            </div>
            {/* Set title's position as vertical */}
            <div className="gf-form">
              <span className="gf-form-label width-10">Vertical position</span>
              <div className="gf-form-select-wrapper gf-size-auto">
                <select className="gf-form-input gf-size-auto" onChange={this.onTitleTextVerticalChanged} value={options.titleTextVertical}>
                  <option value="auto">Auto</option>
                  <option value="top">Top</option>
                  <option value="middle">Middle</option>
                  <option value="bottom">Bottom</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
