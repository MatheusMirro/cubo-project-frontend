import { useState, useEffect } from "react";
import { Container, Paragraph, Title, Graphic, Table } from "./styled";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

const colors = "../../../colors.json";

const baseURL = "http://localhost:7000/content";

const Hero = () => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const res = await axios.get(baseURL);
      setContacts(res.data);
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = () => {
      fetch(baseURL)
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then(async (res) => {
          const label = [];
          const data = [];

          for (var i of res) {
            label.push(i.name);
            data.push(i.participation);
          }

          const fetchColor = () => {
            fetch(colors)
              .then((data) => {
                const response = data.json();
                return response;
              })
              .then(async (response) => {
                const backgroundColor: any = [];

                for (var j of response) {
                  backgroundColor.push(j.hex);
                }
                const item =
                  backgroundColor[
                    Math.floor(Math.random() * backgroundColor.length)
                  ];
              });
          };

          fetchColor();

          setData({
            datasets: [
              {
                data: data,
                backgroundColor: [
                  "red",
                  "green",
                  "blue",
                  "yellow",
                  "pink",
                  "gray",
                ],
              },
            ],
            labels: label,
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  return (
    <Container>
      <Title>DATA</Title>
      <Paragraph>lorem ipsum dolor sit amet, consectetur adip</Paragraph>
      <Graphic>
        <Chart type="pie" data={data} options={lightOptions} />
      </Graphic>
      <Table>
        <DataTable
          value={contacts}
          rows={2}
          showGridlines
          responsiveLayout="scroll"
        >
          <Column field="id" header="Code"></Column>
          <Column field="name" header="First Name"></Column>
          <Column field="lastname" header="Last Name"></Column>
          <Column field="participation" header="Participation"></Column>
        </DataTable>
      </Table>
    </Container>
  );
};
export default Hero;
