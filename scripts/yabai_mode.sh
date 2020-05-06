#!/bin/sh

PATH=/usr/local/bin/:$PATH

# Check if yabai exists
if ! [ -x "$(command -v yabai)" ]; then
  echo "{\"error\":\"yabai binary not found\"}"
  exit 1
fi

YABAI_MODE=$( yabai -m query --spaces | jq ".[] | select( .focused | contains(1)) | .type")

echo $(cat <<-EOF
{
  "mode": $YABAI_MODE
}
EOF
)
