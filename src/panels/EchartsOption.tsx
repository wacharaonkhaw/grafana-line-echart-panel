import React from 'react';

import ReactEcharts from 'echarts-for-react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';

const echartOption = (props: PanelProps<SimpleOptions>) => {
  const { data, options } = props;

  options.legendInfo !== ''
    ? (options.legendInfo = options.legendInfo)
    : (options.legendInfo = data?.series[0]?.fields?.map(item => {
        return item.name;
      })[0]);

  //For collect legend list
  data?.series?.map((items: any) => {
    items.fields?.map((data: any) => {
      // console.log('----------- Data ----------- : ' + data.name);

      // Check key from dropdown first
      // Then keep value does not duplicate from db into legendList variable
      // console.log('legendInfo = ' + options.legendInfo);
      if (data.name === options.legendInfo) {
        data.values?.buffer.map((legend: any) => {
          legend = legend.toString();
          if (!options.legendList.includes(legend)) {
            options.legendList.push(legend);
            // console.log('Legend : ' + legend);
          }
        });
      }

      // console.log('xAxisData = ' + options.xAxisData);
      if (data.name === options.xAxisData) {
        options.xData = [];
        data.values?.buffer.map((xValue: any) => {
          options.xData.push(xValue);
          // console.log('X value : ' + xValue);
        });
      }

      // console.log('yAxisData = ' + options.yAxisData);
      if (data.name === options.yAxisData) {
        options.yData = [];
        data.values?.buffer.map((yValue: any) => {
          options.yData.push(yValue);
          // console.log('Y value : ' + yValue);
        });
      }
    });
  });

  // START ---- series's value and symbol
  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  if (options.seriesList.length === 0) {
    options.seriesList = options.legendList.map((item: any) => {
      return { name: item, symbol: 'circle', size: 10, color: getRandomColor() };
    });
  }
  // END ---- series's value and symbol

  // START ---- collect value from xAxis, yAxis dropdown into xAxisAndyAxisDataList variable
  const rowCount = data?.series[0]?.length;
  const xAxisAndyAxisDataList: any[] = [];

  for (let i = 0; i < rowCount; i++) {
    const dataList: any[] = [];
    data?.series[0]?.fields?.map((item: any) => {
      if (item.name === options.xAxisData) {
        // console.log('Item name ' + i + ' : ' + item.name);
        // console.log('xAxisData : ' + options.xAxisData);
        // console.log('Value : ' + item.values.buffer[i]);
        dataList.push({ name: item.name, value: item.values.buffer[i] });
      }
    });
    xAxisAndyAxisDataList.push(dataList);
  }

  for (let i = 0; i < rowCount; i++) {
    data?.series[0]?.fields?.map((item: any) => {
      if (item.name === options.yAxisData) {
        xAxisAndyAxisDataList[i].push({ name: item.name, value: item.values.buffer[i] });
      }
    });
  }

  for (let i = 0; i < rowCount; i++) {
    data?.series[0]?.fields?.map((item: any) => {
      if (item.name !== options.xAxisData && item.name !== options.yAxisData) {
        xAxisAndyAxisDataList[i].push({ name: item.name, value: item.values.buffer[i] });
      }
    });
  }
  // END ---- collect value from xAxis, yAxis dropdown into xAxisAndyAxisDataList variable

  options.dataName = xAxisAndyAxisDataList[0]?.map((item: any) => {
    return item.name;
  });

  const myAllData: any[] = [];
  xAxisAndyAxisDataList.map((data: any) => {
    const temp: any[] = [];
    data.map((i: any) => {
      temp.push(i.value);
    });
    myAllData.push(temp);
  });

  const option = {
    backgroundColor: options.backgroundColor,
    title: {
      text: options.titleText,
      show: options.isShowTitle,
      textStyle: {
        color: options.titleTextColor,
        fontSize: options.titleTextFontSize,
      },
      top: options.titleTextVertical,
      left: options.titleTextHorizontal,
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['black black', 'smart smart', 'bob bob'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'black black',
        type: 'line',
        stack: 'group1',
        areaStyle: {},
        data: [50, 40, 80, 100, 150, 80, 190],
      },
      {
        name: 'smart smart',
        type: 'line',
        stack: 'group1',
        areaStyle: {},
        data: [70, 130, 110, 95, 50, 70, 30],
      },
      {
        name: 'bob bob',
        type: 'line',
        stack: 'group1',
        areaStyle: {},
        data: [55, 40, 40, 50, 60, 70, 180],
      },
    ],
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
