const onChange = (objectToWatch, onChangeFn) => {
  const handler = {
    set(target, property, value) {
      onChangeFn();
      return Reflect.set(target, property, value);
    },
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      if (typeof value === "object") {
        return new Proxy(value, handler);
      }

      return value;
    },

    deleteProperty(target, property) {
      onChangeFn();
      return Reflect.deleteProperty(target, property);
    },
    defineProperty(target, propertyKey, attributes) {
      onChangeFn();
      return Reflect.defineProperty(target, propertyKey, attributes);
    },
  };
  return new Proxy(objectToWatch, handler);
};

export { onChange };
