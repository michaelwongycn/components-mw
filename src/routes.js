import TableDemo from "./pages/Table/tableDemo";
import ModalDemo from "./pages/Modal/modalDemo";
import FormDemo from "./pages/Form/formDemo";
import TypeAheadDemo from "./pages/TypeAhead/typeAheadDemo";
import NavbarDemo from "./pages/Layout/Navbar/navbarDemo";
import CarouselDemo from "./pages/Display/Carousel/carouselDemo";

const routesConfig = [
  { path: "table", element: <TableDemo />, name: "Table Demo" },
  { path: "form", element: <FormDemo />, name: "Form Demo" },
  { path: "modal", element: <ModalDemo />, name: "Modal Demo" },
  { path: "type-ahead", element: <TypeAheadDemo />, name: "Type Ahead Demo" },
  {
    path: "carousel",
    element: <CarouselDemo />,
    name: "Carousel Demo",
  },
  {
    path: "navbar",
    element: <NavbarDemo />,
    name: "Navbar Demo",
  },
];

export default routesConfig;
