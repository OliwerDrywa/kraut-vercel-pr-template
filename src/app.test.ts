import { describe, expect, it } from 'vitest'
import { workflowSteps } from './app'

describe('workflowSteps', () => {
  it('starts the development loop by reading project preferences', () => {
    expect(workflowSteps[0]).toContain('PROJECT_PREFERENCES.md')
  })
})
