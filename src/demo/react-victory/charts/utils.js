/**
   * Takes data in the following format:
   *
   * [
   *   { foo: 'a', bar: 123, baz: 456 },
   *   { foo: 'b', bar: 123, baz: 456 },
   *   { foo: 'c', bar: 123, baz: 456 },
   * ]
   *
   * and ( if xField == 'foo' && yFields == ['bar', 'baz']),
   * transforms it into:
   *
   * [
   *  [
   *    { x: 'a', y: 123, label: 'a\n123' },
   *    { x: 'a', y: 456, label: 'a\n456' }
   *  ],
   *  [
   *    { x: 'b', y: 123, label: 'b\n123' },
   *    { x: 'b', y: 456, label: 'b\n456' }
   *  ]
   *  [
   *    { x: 'c', y: 123, label: 'c\n123' },
   *    { x: 'c', y: 456, label: 'c\n456' }
   *  ]
   * ]
   */
  export const adaptData = ({
    data,
    xField,
    yFields
  }) => {
    const output = yFields.map((f, i) =>
      data.map(d => ({
        x: d[xField],
        y: d[f],
        label: `${d[xField]}\n${ Math.round(d[f],2).toLocaleString() }`
      }))
    )

    return output
  }

  export const getLegendData = ({
    fields
  }) => {

    const output = fields.map((f, i) => ({
      name: f,
      symbol: { type: 'square' }
    }))

    return output
  }

  export const createColorScale = ({
    colors,
    fields
  }) => {
    const output = fields.map((f, i) => `${colors[i % colors.length]}` )

    return output
  }
