import React from "react";
import { AddClientModal } from "../../components/modals/AddClientModal";
import { AddProjectModal } from "../../components/modals/AddProjectModal";

import { Projects } from "../../components/Projects";
import { Clients } from "../../components/Clients";

export const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <Clients />
    </>
  );
};
