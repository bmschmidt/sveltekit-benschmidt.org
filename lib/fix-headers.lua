-- fix-headers.lua

-- Function to generate a new identifier from the header content
local function generate_identifier(inlines)
  local identifier = pandoc.utils.stringify(inlines)  -- Convert to plain text
  -- If it starts with non-alphabetic characters, add a prefix
  if not identifier:match("^%a") then
    identifier = "section-" .. identifier
  end
  identifier = identifier:lower():gsub("[^A-Za-z0-9%-_]+", "-")  -- Replace spaces with hyphens
  identifier = identifier:lower():gsub("-$", "")  -- Replace spaces with hyphens
  return identifier
end

-- Function to modify header identifiers
function Header(el)
  local id = el.attr[1] or ""  -- Identifier
  local classes = el.attr[2] or {}  -- Classes
  local attrs = el.attr[3] or {}  -- Key-value attributes

  -- If the current identifier is empty, generate a new one
    id = generate_identifier(el.content)

  -- Update the header attributes
  el.attr = {id, classes, attrs}
  return el
end
