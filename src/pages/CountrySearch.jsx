import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from "components";

import { useGetByRegion } from "hooks/useGetByRegion";

export const CountrySearch = () => {
  const { countries, error, isLoading, onHandleSubmit } = useGetByRegion();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        {error && <Heading textAlign={"center"}>Bad request</Heading>}
        {isLoading && <Loader />}
        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
