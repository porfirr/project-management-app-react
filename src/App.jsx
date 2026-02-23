import { useState } from "react";
import NoContentYet from "./components/NoContentYet";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ShowContent from "./components/ShowContent";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjcetsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(textCont) {
    setProjcetsState(prevState => {
      const textId = Math.random();
      const newTask = {
        text: textCont,
        projectId: prevState.selectedProjectId,
        id: textId
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjcetsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        )
      };
    });
  }

  function handleDeleteProject() {
    setProjcetsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
        tasks: prevState.tasks.filter((t) => t.projectId !== prevState.selectedProjectId),
      };
    });
  }

  function handleSelectProject(id) {
    setProjcetsState(prevObject => {
      return {
        ...prevObject,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelAddProject() {
    setProjcetsState(prevObject => {
      return {
        ...prevObject,
        selectedProjectId: undefined,
      };
    });
  }

  function handleStartAddProject() {
    setProjcetsState(prevObject => {
      return {
        ...prevObject,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjcetsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = ( 
    <SelectedProject 
      project={selectedProject} 
      onDelete={handleDeleteProject} 
      onAddTask={handleAddTask} 
      onDeleteTask={handleDeleteTask} 
      tasks={projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId)}
    /> 
  );

  if (projectsState.selectedProjectId === null) {
    content = <ShowContent onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoContentYet onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects} 
        onSelectProject={handleSelectProject} 
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
