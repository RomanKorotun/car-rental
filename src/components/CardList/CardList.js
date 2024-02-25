import { Card } from "../Card/Card";
import { Item, List } from "./CardList.styled";

export const CardList = ({ cars }) => {
  return (
    <List>
      {cars.map((car) => (
        <Item key={car.id}>
          <Card car={car} />
        </Item>
      ))}
    </List>
  );
};
