import { styled } from "@mui/system";
import MaterialTable from "material-table";
import { MainLayout } from "../layout";

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <Content>
        <MaterialTable
          style={{ height: "100%", flex: 1 }}
          title="Анализ дохода"
          columns={[
            { title: "Name", field: "name" },
            { title: "Surname", field: "surname" },
            { title: "Birth Year", field: "birthYear", type: "numeric" },
            {
              title: "Birth Place",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
            },
          ]}
          actions={[
            {
              icon: "add",
              tooltip: "Add User",
              isFreeAction: true,
              onClick: (event) => alert("You want to add a new row"),
            },
          ]}
        />
        <MaterialTable
          style={{ height: "100%", flex: 1 }}
          title="Анализ выполнения задач"
          columns={[
            { title: "Name", field: "name" },
            { title: "Surname", field: "surname" },
            { title: "Birth Year", field: "birthYear", type: "numeric" },
            {
              title: "Birth Place",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
            },
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
            },
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
            },
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
            },
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
            },
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
            },
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
            },
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
            },
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
            },
          ]}
          actions={[
            {
              icon: "add",
              tooltip: "Add User",
              isFreeAction: true,
              onClick: (event) => alert("You want to add a new row"),
            },
          ]}
        />
      </Content>
    </MainLayout>
  );
};

const Content = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  gap: "20px",
});
