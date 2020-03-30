import React from 'react';

import ReactEcharts from 'echarts-for-react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';

const echartOption = (props: PanelProps<SimpleOptions>) => {
  const { data, options } = props;
  
  data?.series?.map((items: any) => {
    console.log(items.fields)
  });

  options.legendData !== '' ? console.log("legendData is not empty") 
                            : console.log("legendData is empty") 
  
  const option = {
    title: {
        text: 'line graph'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['A1', 'B1', 'C1', 'D1', 'E1']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'A1',
            type: 'line',
            stack: 'A',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'B1',
            type: 'line',
            stack: 'A',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'C1',
            type: 'line',
            stack: 'A',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'D1',
            type: 'line',
            stack: 'A',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'E1',
            type: 'line',
            stack: 'A',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
  };

  return option;
};

const EchartsOption = (props: PanelProps<SimpleOptions>) => {
  const { height } = props;
  return (
    <ReactEcharts
      option={echartOption(props)}
      style={{
        height: height,
        width: '100%',
      }}
    />
  );
};

export default EchartsOption;
