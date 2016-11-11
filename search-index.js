var searchIndex = {};
searchIndex["dalvik"] = {"doc":"","items":[[3,"Dex","dalvik","",null,null],[3,"Prototype","","",null,null],[3,"Field","","",null,null],[3,"Method","","",null,null],[3,"ClassDef","","",null,null],[0,"error","","",null,null],[4,"Error","dalvik::error","Dalvik parser errors.",null,null],[13,"InvalidMagic","","Invalid magic number.",0,null],[13,"InvalidFileSize","","Invalid file size.",0,null],[13,"InvalidEndianTag","","Invalid file size.",0,null],[13,"InvalidHeaderSize","","Invalid header size.",0,null],[13,"MismatchedOffsets","","Mismatched offsets.",0,null],[13,"InvalidAccessFlags","","Invalid access flags.",0,null],[13,"InvalidItemType","","Invalid item type.",0,null],[13,"InvalidVisibility","","Invalid visibility.",0,null],[13,"InvalidValue","","Invalid value.",0,null],[13,"InvalidUleb128","","Invalid uleb128.",0,null],[13,"Header","","Generic header error.",0,null],[13,"Map","","Generic map error.",0,null],[13,"IO","","IO error.",0,null],[6,"Result","","Dalvik parser result type.",null,null],[11,"fmt","","",0,null],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","","",0,null],[11,"description","","",0,null],[11,"cause","","",0,null],[0,"types","dalvik","",null,null],[3,"PrototypeIdData","dalvik::types","Data structure representing the `proto_id_item` type.",null,null],[3,"FieldIdData","","Structure representing the `field_id_item` type.",null,null],[3,"MethodIdData","","Structure representing the `method_id_item` type.",null,null],[3,"AccessFlags","","",null,null],[3,"ClassDefData","","",null,null],[3,"Array","","Array",null,null],[3,"AnnotationElement","","Annotation element.",null,null],[3,"Annotation","","Annotation.",null,null],[3,"AnnotationItem","","Annotation item",null,null],[3,"FieldAnnotations","","",null,null],[3,"MethodAnnotations","","",null,null],[3,"ParameterAnnotations","","",null,null],[3,"AnnotationsDirectory","","",null,null],[3,"MapItem","","",null,null],[4,"Visibility","","Annotation visibility",null,null],[13,"Build","","",1,null],[13,"Runtime","","",1,null],[13,"System","","",1,null],[4,"Value","","Value.",null,null],[13,"Byte","","",2,null],[13,"Short","","",2,null],[13,"Char","","",2,null],[13,"Int","","",2,null],[13,"Long","","",2,null],[13,"Float","","",2,null],[13,"Double","","",2,null],[13,"String","","",2,null],[13,"Type","","",2,null],[13,"Field","","",2,null],[13,"Method","","",2,null],[13,"Enum","","",2,null],[13,"Array","","",2,null],[13,"Annotation","","",2,null],[13,"Null","","",2,null],[13,"Boolean","","",2,null],[4,"ItemType","","",null,null],[13,"Header","","",3,null],[13,"StringId","","",3,null],[13,"TypeId","","",3,null],[13,"ProtoId","","",3,null],[13,"FieldId","","",3,null],[13,"MethodId","","",3,null],[13,"ClassDef","","",3,null],[13,"Map","","",3,null],[13,"TypeList","","",3,null],[13,"AnnotationSetList","","",3,null],[13,"AnnotationSet","","",3,null],[13,"ClassData","","",3,null],[13,"Code","","",3,null],[13,"StringData","","",3,null],[13,"DebugInfo","","",3,null],[13,"Annotation","","",3,null],[13,"EncodedArray","","",3,null],[13,"AnnotationsDirectory","","",3,null],[17,"ACC_PUBLIC","","",null,null],[17,"ACC_PRIVATE","","",null,null],[17,"ACC_PROTECTED","","",null,null],[17,"ACC_STATIC","","",null,null],[17,"ACC_FINAL","","",null,null],[17,"ACC_SYNCHRONIZED","","",null,null],[17,"ACC_VOLATILE","","",null,null],[17,"ACC_BRIDGE","","",null,null],[17,"ACC_TRANSIENT","","",null,null],[17,"ACC_VARARGS","","",null,null],[17,"ACC_NATIVE","","",null,null],[17,"ACC_INTERFACE","","",null,null],[17,"ACC_ABSTRACT","","",null,null],[17,"ACC_STRICT","","",null,null],[17,"ACC_SYNTHETIC","","",null,null],[17,"ACC_ANNOTATION","","",null,null],[17,"ACC_ENUM","","",null,null],[17,"ACC_CONSTRUCTOR","","",null,null],[17,"ACC_DECLARED_SYNCHRONIZED","","",null,null],[11,"fmt","","",4,null],[11,"clone","","",4,null],[11,"from_reader","","Creates a new `PrototypeIdData` from a reader.",4,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"get_shorty_index","","Gets the shorty index.",4,null],[11,"get_return_type_index","","Gets the return type index.",4,null],[11,"get_parameters_offset","","Gets the parameter list offset, if the prototype has parameters.",4,null],[11,"fmt","","",5,null],[11,"clone","","",5,null],[11,"from_reader","","Creates a new `FieldIdData` from a reader.",5,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"get_class_index","","Gets the index of the class of the field.",5,null],[11,"get_type_index","","Gets the index of the type of the class.",5,null],[11,"get_name_index","","Gets the index to the name of this field.",5,null],[11,"fmt","","",6,null],[11,"clone","","",6,null],[11,"from_reader","","Creates a new `MethodIdData` from a reader.",6,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"get_class_index","","Gets the index of the class of the field.",6,null],[11,"get_prototype_index","","Gets the index of the prototype of the class.",6,null],[11,"get_name_index","","Gets the index to the name of this field.",6,null],[11,"eq","","",7,null],[11,"ne","","",7,null],[11,"clone","","",7,null],[11,"partial_cmp","","",7,null],[11,"lt","","",7,null],[11,"le","","",7,null],[11,"gt","","",7,null],[11,"ge","","",7,null],[11,"cmp","","",7,null],[11,"hash","","",7,null],[11,"fmt","","",7,null],[11,"empty","","Returns an empty set of flags.",7,{"inputs":[],"output":{"name":"accessflags"}}],[11,"all","","Returns the set containing all flags.",7,{"inputs":[],"output":{"name":"accessflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",7,null],[11,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",7,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",7,{"inputs":[{"name":"u32"}],"output":{"name":"accessflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",7,null],[11,"is_all","","Returns `true` if all flags are currently set.",7,null],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",7,null],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",7,null],[11,"insert","","Inserts the specified flags in-place.",7,null],[11,"remove","","Removes the specified flags in-place.",7,null],[11,"toggle","","Toggles the specified flags in-place.",7,null],[11,"bitor","","Returns the union of the two sets of flags.",7,null],[11,"bitor_assign","","Adds the set of flags.",7,null],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",7,null],[11,"bitxor_assign","","Toggles the set of flags.",7,null],[11,"bitand","","Returns the intersection between the two sets of flags.",7,null],[11,"bitand_assign","","Disables all flags disabled in the set.",7,null],[11,"sub","","Returns the set difference of the two sets of flags.",7,null],[11,"sub_assign","","Disables all flags enabled in the set.",7,null],[11,"not","","Returns the complement of this set of flags.",7,null],[11,"extend","","",7,null],[11,"from_iter","","",7,{"inputs":[{"name":"t"}],"output":{"name":"accessflags"}}],[11,"fmt","","",8,null],[11,"clone","","",8,null],[11,"from_reader","","Creates a new `ClassDefData` from a reader.",8,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"get_class_id","","Gets the class ID (index in the *Type IDs* list) of the class definition.",8,null],[11,"get_access_flags","","Gets the access flags of the class definition.",8,null],[11,"get_superclass_id","","Gets the class ID (index in the *Type IDs* list) of the superclass, if it exists.",8,null],[11,"get_interfaces_offset","","Gets the offset of the list of interfaces implemented by the class, if it has any.",8,null],[11,"get_source_file_id","","Gets the index in the *String IDs* list of the file name where most of the class was, if it\nexists.",8,null],[11,"get_annotations_offset","","Gets the offset of the annotations of the class, if it has any.",8,null],[11,"get_class_data_offset","","Gets the offset for the data of the class, if it has any.",8,null],[11,"get_static_values_offset","","Gets the offset for the static values of the class, if it has any.",8,null],[11,"fmt","","",1,null],[11,"clone","","",1,null],[11,"fmt","","",2,null],[11,"clone","","",2,null],[11,"fmt","","",9,null],[11,"clone","","",9,null],[11,"from_reader","","Creates an array from a reader.",9,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"fmt","","",10,null],[11,"clone","","",10,null],[11,"get_name_index","","Gets the index of the name string.",10,null],[11,"get_value","","Gets the value of the annotation element.",10,null],[11,"fmt","","",11,null],[11,"clone","","",11,null],[11,"get_type_index","","Gets the index of the type of the annotation.",11,null],[11,"get_elements","","Gets the elements of the annotation.",11,null],[11,"fmt","","",12,null],[11,"clone","","",12,null],[11,"from_reader","","Creates a new annotation item from a reader.",12,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"get_visibility","","Gets the visibility of the annotation item.",12,null],[11,"get_annotation","","Gets the annotation of the annotation item.",12,null],[11,"get_field_index","","Gets the index of the field with annotations in the *Field IDs* list.",13,null],[11,"get_annotations_offset","","Gets the offset of the annotations of the field.",13,null],[11,"get_method_index","","Gets the index of the method with annotations in the *Method IDs* list.",14,null],[11,"get_annotations_offset","","Gets the offset of the annotations of the method.",14,null],[11,"get_method_index","","Gets the index of the method with annotations in the *Method IDs* list.",15,null],[11,"get_annotations_offset","","Gets the offset of the annotations of the method.",15,null],[11,"from_reader","","Creates a new annotations directory from a reader.",16,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"get_class_annotations_offset","","Gets the class annotations offset, if they exist.",16,null],[11,"get_field_annotations","","Gets the field annotations.",16,null],[11,"get_method_annotations","","Gets the method annotations.",16,null],[11,"get_parameter_annotations","","Gets the parameter annotations.",16,null],[11,"fmt","","",3,null],[11,"clone","","",3,null],[11,"eq","","",3,null],[11,"from_reader","","",17,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"get_item_type","","",17,null],[11,"get_num_items","","",17,null],[11,"get_offset","","",17,null],[11,"fmt","","",17,null],[0,"sizes","dalvik","",null,null],[17,"HEADER_SIZE","dalvik::sizes","",null,null],[17,"STRING_ID_ITEM_SIZE","","",null,null],[17,"TYPE_ID_ITEM_SIZE","","",null,null],[17,"PROTO_ID_ITEM_SIZE","","",null,null],[17,"FIELD_ID_ITEM_SIZE","","",null,null],[17,"METHOD_ID_ITEM_SIZE","","",null,null],[17,"CLASS_DEF_ITEM_SIZE","","",null,null],[17,"MAP_ITEM_SIZE","","",null,null],[17,"TYPE_ITEM_SIZE","","",null,null],[17,"ANNOTATION_SET_REF_SIZE","","",null,null],[17,"ANNOTATION_SET_ITEM_SIZE","","",null,null],[0,"offset_map","dalvik","",null,null],[3,"OffsetMap","dalvik::offset_map","",null,null],[4,"OffsetType","","",null,null],[13,"StringIdList","","",18,null],[13,"TypeIdList","","",18,null],[13,"PrototypeIdList","","",18,null],[13,"FieldIdList","","",18,null],[13,"MethodIdList","","",18,null],[13,"ClassDefList","","",18,null],[13,"Map","","",18,null],[13,"TypeList","","",18,null],[13,"AnnotationSetList","","",18,null],[13,"AnnotationSet","","",18,null],[13,"Annotation","","",18,null],[13,"AnnotationsDirectory","","",18,null],[13,"ClassData","","",18,null],[13,"Code","","",18,null],[13,"StringData","","",18,null],[13,"DebugInfo","","",18,null],[13,"EncodedArray","","",18,null],[13,"Link","","",18,null],[11,"with_capacity","","Creates a new offset map with the given initial capacity. It will allocate space for\nexactly `capacity` offsets.",19,{"inputs":[{"name":"usize"}],"output":{"name":"offsetmap"}}],[11,"insert","","Inserts a new offset in the offset map.",19,null],[11,"get_offset","","Gets the given offset, if it exists at the map. The parameter is the offset from the start\nof the file, and it will be searched in the stored offsets in the map.",19,null],[11,"deref","","",19,null],[11,"deref_mut","","",19,null],[11,"fmt","","",18,null],[11,"clone","","",18,null],[11,"eq","","",18,null],[0,"header","dalvik","",null,null],[3,"Header","dalvik::header","Dex header representantion structure.",null,null],[17,"ENDIAN_CONSTANT","","",null,null],[17,"REVERSE_ENDIAN_CONSTANT","","",null,null],[11,"from_file","","Obtains the header from a Dex file.",20,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[11,"from_reader","","Obtains the header from a Dex file reader.",20,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"get_magic","","Gets the magic value.",20,null],[11,"get_dex_version","","Gets Dex version.",20,null],[11,"get_checksum","","Gets file checksum.",20,null],[11,"get_signature","","Gets file SHA-1 signature.",20,null],[11,"get_file_size","","Gets file size.",20,null],[11,"get_header_size","","Gets header size, in bytes.",20,null],[11,"get_endian_tag","","Gets the endian tag.",20,null],[11,"is_little_endian","","Gets wether the file is in little endian or not.",20,null],[11,"is_big_endian","","Gets wether the file is in big endian or not.",20,null],[11,"get_link_size","","Gets the link section size",20,null],[11,"get_link_offset","","Gets the link section offset.",20,null],[11,"get_map_offset","","Gets the map section offset.",20,null],[11,"get_string_ids_size","","Gets the string IDs list size.",20,null],[11,"get_string_ids_offset","","Gets the string IDs list offset.",20,null],[11,"get_type_ids_size","","Gets the type IDs list size.",20,null],[11,"get_type_ids_offset","","Gets the type IDs list offset.",20,null],[11,"get_prototype_ids_size","","Gets the prototype IDs list size.",20,null],[11,"get_prototype_ids_offset","","Gets the prototype IDs list offset.",20,null],[11,"get_field_ids_size","","Gets the field IDs list size.",20,null],[11,"get_field_ids_offset","","Gets the field IDs list offset.",20,null],[11,"get_method_ids_size","","Gets the method IDs list size.",20,null],[11,"get_method_ids_offset","","Gets the method IDs list offset.",20,null],[11,"get_class_defs_size","","Gets the class definition list size.",20,null],[11,"get_class_defs_offset","","Gets the class definition list offset.",20,null],[11,"get_data_size","","Gets the data section size.",20,null],[11,"get_data_offset","","Gets the data secrion offset.",20,null],[11,"generate_offset_map","","",20,null],[11,"verify_file","","Verifies the file at the given path.",20,null],[11,"verify_reader","","Verifies the file in the given reader.",20,null],[11,"fmt","","",20,null],[11,"fmt","dalvik","",21,null],[11,"from_file","","Reads the Dex data structure from the given path.",21,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[11,"from_reader","","Loads a new Dex data structure from the given reader.",21,{"inputs":[{"name":"r"},{"name":"u64"}],"output":{"name":"result"}}],[11,"add_file","","Ads the file in the given path to the current Dex data structure.",21,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[11,"verify_file","","Verifies the file at the given path.",21,null],[11,"verify_reader","","Verifies the file in the given reader.",21,null],[11,"fmt","","",22,null],[11,"fmt","","",23,null],[11,"fmt","","",24,null],[11,"fmt","","",25,null]],"paths":[[4,"Error"],[4,"Visibility"],[4,"Value"],[4,"ItemType"],[3,"PrototypeIdData"],[3,"FieldIdData"],[3,"MethodIdData"],[3,"AccessFlags"],[3,"ClassDefData"],[3,"Array"],[3,"AnnotationElement"],[3,"Annotation"],[3,"AnnotationItem"],[3,"FieldAnnotations"],[3,"MethodAnnotations"],[3,"ParameterAnnotations"],[3,"AnnotationsDirectory"],[3,"MapItem"],[4,"OffsetType"],[3,"OffsetMap"],[3,"Header"],[3,"Dex"],[3,"Prototype"],[3,"Field"],[3,"Method"],[3,"ClassDef"]]};
searchIndex["byteorder"] = {"doc":"This crate provides convenience methods for encoding and decoding numbers\nin either big-endian or little-endian order.","items":[[4,"BigEndian","byteorder","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[6,"NetworkEndian","","Defines network byte order serialization.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",2,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",2,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",2,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",2,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",2,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",2,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",2,null],[10,"write_uint","","Writes an unsigned integer `n` to `buf` using only `nbytes`.",2,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",2,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",2,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",2,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",2,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",2,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",2,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",2,null],[11,"write_int","","Writes a signed integer `n` to `buf` using only `nbytes`.",2,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"read_u16","","",3,null],[11,"read_u32","","",3,null],[11,"read_u64","","",3,null],[11,"read_uint","","",3,null],[11,"write_u16","","",3,null],[11,"write_u32","","",3,null],[11,"write_u64","","",3,null],[11,"write_uint","","",3,null],[11,"read_u16","","",4,null],[11,"read_u32","","",4,null],[11,"read_u64","","",4,null],[11,"read_uint","","",4,null],[11,"write_u16","","",4,null],[11,"write_u32","","",4,null],[11,"write_u64","","",4,null],[11,"write_uint","","",4,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null]],"paths":[[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
searchIndex["bitflags"] = {"doc":"A typesafe bitmask flag generator.","items":[[14,"bitflags","bitflags","The `bitflags!` macro generates a `struct` that holds a set of C-style\nbitmask flags. It is useful for creating typesafe wrappers for C APIs.",null,null]],"paths":[]};
initSearch(searchIndex);
