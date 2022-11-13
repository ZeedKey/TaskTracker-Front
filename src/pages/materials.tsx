import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import XHRUpload from "@uppy/xhr-upload";
import { MainLayout } from "../layout";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { styled } from "@mui/system";

const uppy = new Uppy({
  meta: { type: "avatar" },

  autoProceed: false,
}).use(XHRUpload, {
  endpoint: "http://localhost:3001/materials",
  bundle: false,
});

export const Materials: React.FC = () => {
  return (
    <MainLayout>
      <Title>Материалы для партнеров</Title>
      <Dashboard
        uppy={uppy}
        width={"100%"}
        proudlyDisplayPoweredByUppy={false}
      />
    </MainLayout>
  );
};

const Title = styled("h1")({
  fontSize: "2.5ch",
  fontFamily: "Roboto",
  fontWeight: 400,
  marginBottom: 20,
});
