import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { FormEvent, useState } from "react";

function SearchFeed() {
  const [searchVal, setSearchVal] = useState<string>("");

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchVal);
  };

  return (
    <Paper
      component={"form"}
      onSubmit={handleSearchSubmit}
      sx={{
        borderRadius: "20px",
        border: "1px solid #e3e3e3",
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{
          border: "none",
          background: "transparent",
          outline: "none",
          width: "25vw",
        }}
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          color: "black",
          mr: "0.5rem",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchFeed;
