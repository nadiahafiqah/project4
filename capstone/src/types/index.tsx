export type DeleteModalProps = {
  handleToggle: () => void;
  open: boolean;
};

export type Token = {
  username: string | undefined;
  loggedInStatus: boolean;
};
