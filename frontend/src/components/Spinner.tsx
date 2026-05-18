import { MoonLoader } from 'react-spinners'

interface LoaderProps {
  loading: boolean
}

const Spinner = ({loading}: LoaderProps) => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <MoonLoader 
        color='#2C473C'
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner