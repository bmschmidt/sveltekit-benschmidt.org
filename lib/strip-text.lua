-- keep_metadata.lua

function Pandoc(doc)
  -- Create a new empty document with the same metadata
  return pandoc.Pandoc({}, doc.meta)
end