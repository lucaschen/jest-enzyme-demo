import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";

import fetchAuthors from "./_fetchAuthors";

const DropdownArrow = styled.div`
  display: flex;
  height: 100%;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 2rem;

  :before {
    content: "\\25BE";
    margin: auto;
  }
`;

const Select = styled.select`
  appearance: none;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 0;
  display: block;
  font-family: inherit;
  font-size: 1.15rem;
  padding: 0.25em 0.35em;
  transition: border-color 0.5s, color 0.5s;
  width: 100%;

  :disabled {
    color: #aaaaaa;
  }

  :focus {
    border-color: #1eda1e;
    outline: none;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const FavouriteAuthor = forwardRef(({ disabled }, ref) => {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    fetchAuthors().then(authors => {
      setAuthors(authors);
    });
  }, []);

  return (
    <SelectWrapper>
      <Select disabled={disabled || !authors} name="plan" ref={ref}>
        {!authors ? (
          <option value="">Loading...</option>
        ) : (
          <>
            <option value="">(choose one)</option>
            {authors.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </>
        )}
      </Select>
      <DropdownArrow />
    </SelectWrapper>
  );
});

export default FavouriteAuthor;
