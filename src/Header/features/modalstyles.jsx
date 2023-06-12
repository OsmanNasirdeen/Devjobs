const modalContainer = {
  position: "fixed",
  width: "327px",
  height: "217px",
  left: "24px",
  top: "225px",
  display: "flex",
  flexDirection: "column",
  background: "var(--white)",
  borderRadius: "6px",
  zIndex: 9,
};

const filterLocation = {
  position: "absolute",
  display: "flex",
  columnGap: "16px",
  width: "294px",
  height: "24px",
  left: "24px",
  top: "155px",
  zIndex: 10,
};
const filterFullTime = {
  display: "flex",
  zIndex: 10,
};

const filterButton = {
  display: "block",
};
const modalOverlay = {
  display: "block",
};
export const styles = {
  modalContainer: modalContainer,
  filterLocation: filterLocation,
  filterFullTime: filterFullTime,
  filterButton: filterButton,
  modalOverlay: modalOverlay,
};
