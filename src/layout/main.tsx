import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "../common";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Menu>
        <Title>Laity</Title>
        <Links>
        <Link title="Главная" href="/" />
        <Link title="Материалы" href="/materials" />
        </Links>
      </Menu>
      <Table>{children}</Table>
    </Layout>
  );
};

const Layout = styled("div")({
  display: "grid",
  height: "100%",
  gridTemplateColumns: "15% auto",
});
const Table = styled(Grid)({
  height: "100%",
  padding: "20px",
});
const Menu = styled(Grid)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  padding: "20px",
});
const Title = styled("h1")(({ theme }) => ({
  fontSize: "1.5ch",
  fontFamily: "Roboto",
  color: theme.palette.primary,
}));
const Links = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginTop: 20
});
