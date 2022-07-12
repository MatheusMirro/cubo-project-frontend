import React, { useState } from "react";
import axios from "axios";
import { Button, Container, HeaderContainer, DataUser, Input } from "./styled";

function Header() {
  const [userName, setUserName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [activity, setActivity] = useState(0);

  async function addParticipation() {
    const response = axios.post("http://localhost:7000/content", {
      name: userName,
      lastname: secondName,
      participation: activity,
    });
    setUserName("");
    setSecondName("");
    setActivity(0);
    console.log((await response).data);
    window.location.reload();
  }

  return (
    <Container>
      <HeaderContainer>
        <DataUser>
          <Input
            value={userName}
            onChange={(e: any) => setUserName(e.target.value)}
            type="text"
            placeholder="First Name"
          />
          <Input
            value={secondName}
            onChange={(event: any) => setSecondName(event.target.value)}
            type="text"
            placeholder="Second Name"
          />
          <Input
            value={activity}
            onChange={(event: any) => setActivity(event.target.value)}
            type="number"
            placeholder="Participation"
          />
          <Button onClick={addParticipation}>SEND</Button>
        </DataUser>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
