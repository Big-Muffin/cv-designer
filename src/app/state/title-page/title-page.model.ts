// props definitions
export interface SetTitleProps {
  title: string;
}

// state definition
export interface TitlePageState {
  title: string;
}

export const initialState: TitlePageState = {
  title: '',
};
