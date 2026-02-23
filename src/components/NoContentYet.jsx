import foto from '../assets/no-projects.png'
import Button from './Button'

const NoContentYet = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={foto} alt="An empty task list" />
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400">Select a project or get started with a new one</p>
      <div className="mt-8">
        <Button onClick={onStartAddProject}>
          Create new project
        </Button>
      </div>
    </div>
  )
}

export default NoContentYet