import type { Suite } from 'vest'
import type { CB } from 'vest-utils'

import { computed, ref } from 'vue'
import classnames from 'vest/classnames'

interface Classes {
  valid?: string
  tested?: string
  invalid?: string
  warning?: string
  untested?: string
}

const DEFAULT_CLASSES: Classes = {
  valid: undefined,
  tested: undefined,
  invalid: undefined,
  warning: undefined,
  untested: undefined
}

/**
 * Vue composable for interacting with [Vest](https://vestjs.dev) validation suites.
 *
 * @param {Suite} suite - The Vest validation suite
 * @param {Classes} [classes] - The state-validity class names
 */
export function useSuite<T extends CB>(suite: Suite<T>, classes?: Classes) {
  const res = ref(suite.get())

  const cn = computed(() => {
    return classnames(res.value, { ...DEFAULT_CLASSES, ...classes })
  })

  function validate(...args: Parameters<T>) {
    res.value = suite(...args)
  }

  function reset() {
    suite.reset()
    res.value = suite.get()
  }

  function resetField(field: string) {
    suite.resetField(field)
    res.value = suite.get()
  }

  return { res, cn, validate, reset, resetField }
}
