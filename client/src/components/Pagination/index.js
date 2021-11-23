import React, { useMemo } from 'react';
import { List, Item, Button } from './styled';

const Pagination = ({ onChange, activePage, length, itemPerPage }) => {
  const pagingList = useMemo(() => {
    return Array.from({ length: Math.ceil(length / itemPerPage) }, (_, i) => i);
  }, [length, itemPerPage]);

  return (
    <List>
      <Item>
        <Button
          onClick={() => onChange(activePage - 1)}
          disabled={activePage === 0}
        >
          {`<`}
        </Button>
      </Item>

      {pagingList.map((p) => (
        <Item key={p}>
          <Button isActive={p === activePage} onClick={() => onChange(p)}>
            {p + 1}
          </Button>
        </Item>
      ))}

      <Item>
        <Button
          onClick={() => onChange(activePage + 1)}
          disabled={activePage === pagingList.length - 1}
        >
          {`>`}
        </Button>
      </Item>
    </List>
  );
};

export default Pagination;
