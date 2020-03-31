export interface SimpleOptions {
  // Sample
  legendData: string;

  //Title
  titleText: string;
  titleTextFontSize: number;
  titleTextColor: string;
  isShowTitle: boolean;
  titleTextAlign: string;
  titleTextVertical: string;
  titleTextHorizontal: string;
}

export const defaults: SimpleOptions = {
  // Sample
  legendData: 'kk',

    //Title
    titleText: 'Title name',
    titleTextFontSize: 18,
    titleTextColor: '#ffee00',
    isShowTitle: false,
    titleTextAlign: 'auto',
    titleTextVertical: 'top',
    titleTextHorizontal: 'left',
};
