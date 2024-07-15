export interface IMenu {
  id: number;
  text: string;
  link: string;
  isSub: boolean;
  subMenus?: IMenu[];
}
