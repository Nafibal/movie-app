import SearchForm from "@/components/SearchForm";
import { FC, ReactNode } from "react";

interface MyProps {
  children?: ReactNode;
}

const SearchPage: FC<MyProps> = ({ children }) => {
  return (
    <section className="h-screen w-full pt-24">
      <div className="flex justify-center items-center">
        <SearchForm />{" "}
      </div>
      <p>Search Page</p>
      {children}
    </section>
  );
};

export default SearchPage;
