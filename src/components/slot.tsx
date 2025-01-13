// Credits go to https://medium.com/@bryanmylee/aschild-in-react-svelte-vue-and-solid-for-render-delegation-645c73650ced

import React from 'react';

type AnyProps = Record<string, any>;

function mergeReactProps(parentProps: AnyProps, childProps: AnyProps) {
  // All child props should override.
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const parentPropValue = parentProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (childPropValue && parentPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue?.(...args);
          parentPropValue?.(...args);
        };
      } else if (parentPropValue) {
        overrideProps[propName] = parentPropValue;
      }
    } else if (propName === 'style') {
      overrideProps[propName] = { ...parentPropValue, ...childPropValue };
    } else if (propName === 'className') {
      overrideProps[propName] = [parentPropValue, childPropValue]
        .filter(Boolean)
        .join(' ');
    }
  }
  return { ...parentProps, ...overrideProps };
}

/**
 * Handles setting callback refs and MutableRefObjects.
 * @param ref The ref to use for the instance.
 * @param instance The instance being set.
 */
function setRef<TInstance>(ref: React.Ref<TInstance>, instance: TInstance) {
  if (ref instanceof Function) {
    ref(instance);
  } else if (ref != null) {
    (ref as React.RefObject<TInstance>).current = instance;
  }
}

function combinedRef<TInstance>(refs: React.Ref<TInstance>[]) {
  return (instance: TInstance | null) =>
    refs.forEach((ref) => setRef(ref, instance));
}

type SlotProps = {
  children?: React.ReactNode;
};

const Slot = React.forwardRef<HTMLElement, SlotProps>((props, forwardedRef) => {
  const { children, ...slotProps } = props;

  if (!React.isValidElement(children)) {
    return null;
  }
  return React.cloneElement(children, {
    ...mergeReactProps(slotProps, children.props),
    ref: combinedRef([forwardedRef, (children as any).ref]),
  } as any);
});

export default Slot;
