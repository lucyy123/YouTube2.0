import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchFeed() {
  const navigate =useNavigate()
  const [search, setSearch] = useState<string>("");

  const handleChanage = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


      navigate(`/search/${search}` )
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
        value={search}
        onChange={handleChanage}
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
