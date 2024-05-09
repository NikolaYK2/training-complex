import { Select } from '@/commn/components/ui/select/Select'

export function App() {
  return (
    <div
      style={{ alignItems: 'center', display: 'flex', height: '400px', justifyContent: 'center' }}
    >
      <Select
        options={[
          { id: 1, value: 'Select-box' },
          { id: 2, value: 'hi maloy' },
          { id: 3, value: 'Sam maloy' },
        ]}
      />
    </div>
  )
}
