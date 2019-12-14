export const onMouseMove = props => {
  const { mouseEventState, id } = props;
  if (mouseEventState.targetId === id) {
    console.log("moving image", id);
  }
};
