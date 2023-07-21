import styled from "@emotion/styled";
import LogSection from "./components/logSection";

const ChangeLog = () => {
  return (
    <Styled>
      <LogSection
        date="June 21st 2023"
        title="Althea Fork"
        content={`- Forked from Canto.io. `}
      />
    </Styled>
  );
};

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
  /* overflow-y: scroll; */
  /* height: calc(100vh - 10rem); */
  position: relative;

  .section {
    display: flex;
    gap: 2rem;

    .header {
      position: sticky;
      height: min-content;
      min-width: 16rem;
      top: 5.5rem;
      background-color: rgba(0, 119, 255, 0.25);
      padding: 1rem;
      border-bottom: 4px solid var(--primary-color);
    }
    .changes {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-bottom: 6rem;
      p {
        line-height: 2rem;
      }
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    .section {
      flex-direction: column;
      .header {
        background-color: #014428;
        border-bottom: 4px solid var(--primary-color);
        position: sticky;
        /* top: 0; */
        top: 5rem;
        padding: 1rem;
        width: 100%;
        margin: 0;
      }
      .changes {
        padding: 0 2rem;
      }
    }
  }
`;

export default ChangeLog;
