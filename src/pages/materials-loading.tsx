import { MainLayout } from "../layout";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import axios from "axios";

export const MaterialsLoading: React.FC = () => {
  const { id } = useParams();

  axios.get("http://localhost:3001/materials/" + id);

  return (
    <MainLayout>
      <Title>Загрузка начнется в ближайшее время!</Title>
    </MainLayout>
  );
};

const Title = styled("h1")({
  fontSize: "2.5ch",
  fontFamily: "Roboto",
  fontWeight: 400,
  marginBottom: 20,
});
