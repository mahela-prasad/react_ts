import { useState } from "react";
import styled from "styled-components";
import { BsFillCalendar2Fill } from "react-icons/bs";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProp {
  active: boolean;
}

const ListItem = styled.li<ListItemProp>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>
        <BsFillCalendar2Fill /> {heading}
      </h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
