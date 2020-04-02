export interface SimpleOptions {
  backgroundColor: string;
  dataName: any[];

  // Title
  titleText: string;
  titleTextFontSize: number;
  titleTextColor: string;
  isShowTitle: boolean;
  titleTextAlign: string;
  titleTextVertical: string;
  titleTextHorizontal: string;

  // Legend
  isShowLegend: boolean;
  legendTextColor: string;
  legendTextFontSize: number;
  legendBackgroundColor: string;
  legendIcon: string;
  legendInfo: string;
  legendTextAlign: string;
  legendTextLeft: string;
  legendTextTop: string;
  legendOrient: string;
  legendList: any[];

  // Series
  seriesList: any[];
  seriesData: string;

  // Axis
  axisLineColor: string;

  // X axis
  xAxisData: string;
  xData: any[];

  // Y axis
  yAxisData: string;
  yData: any[];
}

export const defaults: SimpleOptions = {
  backgroundColor: '#1b262c',
  dataName: [],

  // Title
  titleText: 'Title name',
  titleTextFontSize: 18,
  titleTextColor: '#ffee00',
  isShowTitle: true,
  titleTextAlign: 'auto',
  titleTextVertical: 'top',
  titleTextHorizontal: 'left',

  // Legend
  isShowLegend: true,
  legendTextColor: '#ffee00',
  legendTextFontSize: 18,
  legendBackgroundColor: 'transparent',
  legendIcon: 'circle',
  legendInfo: '',
  legendTextAlign: 'auto',
  legendTextLeft: 'left',
  legendTextTop: 'auto',
  legendOrient: 'horizontal',
  legendList: [],

  // Series
  seriesList: [],
  seriesData: '',

  // Axis
  axisLineColor: '#ffffee',

  // X axis
  xAxisData: '',
  xData: [],

  // Y axis
  yAxisData: '',
  yData: [],
};
