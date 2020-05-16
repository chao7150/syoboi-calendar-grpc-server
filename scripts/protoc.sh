# generate js codes via grpc-tools
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./proto \
  --grpc_out=./proto \
  --plugin=protoc-gen-grpc=$(which grpc_tools_node_protoc_plugin) \
  -I ./syoboi-calendar-proto/syobocal \
  ./syoboi-calendar-proto/syobocal/*.proto

# generate d.ts codes
grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=./proto \
  -I ./syoboi-calendar-proto/syobocal \
  ./syoboi-calendar-proto/syobocal/*.proto
