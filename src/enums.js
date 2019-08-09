export const THREE_D_BASE_URL = "https://s3.us-west-2.amazonaws.com/exabyte-three-js";

export const THREE_D_SOURCES = [
    "examples/js/libs/system.min.js",
    "examples/js/controls/EditorControls.js",
    "examples/js/controls/TransformControls.js",
    "examples/js/libs/jszip.min.js",
    "examples/js/libs/inflate.min.js",
    "examples/js/loaders/AMFLoader.js",
    "examples/js/loaders/AWDLoader.js",
    "examples/js/loaders/BabylonLoader.js",
    "examples/js/loaders/ColladaLoader.js",
    "examples/js/loaders/FBXLoader.js",
    "examples/js/loaders/GLTFLoader.js",
    "examples/js/loaders/deprecated/LegacyGLTFLoader.js",
    "examples/js/loaders/KMZLoader.js",
    "examples/js/loaders/MD2Loader.js",
    "examples/js/loaders/OBJLoader.js",
    "examples/js/loaders/MTLLoader.js",
    "examples/js/loaders/PlayCanvasLoader.js",
    "examples/js/loaders/PLYLoader.js",
    "examples/js/loaders/STLLoader.js",
    "examples/js/loaders/SVGLoader.js",
    "examples/js/loaders/TGALoader.js",
    "examples/js/loaders/TDSLoader.js",
    "examples/js/loaders/VRMLLoader.js",
    "examples/js/loaders/VTKLoader.js",
    "examples/js/loaders/ctm/lzma.js",
    "examples/js/loaders/ctm/ctm.js",
    "examples/js/loaders/ctm/CTMLoader.js",
    "examples/js/exporters/GLTFExporter.js",
    "examples/js/exporters/OBJExporter.js",
    "examples/js/exporters/STLExporter.js",
    "examples/js/renderers/Projector.js",
    "examples/js/renderers/RaytracingRenderer.js",
    "examples/js/renderers/SoftwareRenderer.js",
    "examples/js/renderers/SVGRenderer.js",
    "editor/js/libs/codemirror/codemirror.js",
    "editor/js/libs/codemirror/mode/javascript.js",
    "editor/js/libs/codemirror/mode/glsl.js",
    "editor/js/libs/esprima.js",
    "editor/js/libs/jsonlint.js",
    "editor/js/libs/glslprep.min.js",
    "editor/js/libs/codemirror/addon/dialog.js",
    "editor/js/libs/codemirror/addon/show-hint.js",
    "editor/js/libs/codemirror/addon/tern.js",
    "editor/js/libs/acorn/acorn.js",
    "editor/js/libs/acorn/acorn_loose.js",
    "editor/js/libs/acorn/walk.js",
    "editor/js/libs/ternjs/polyfill.js",
    "editor/js/libs/ternjs/signal.js",
    "editor/js/libs/ternjs/tern.js",
    "editor/js/libs/ternjs/def.js",
    "editor/js/libs/ternjs/comment.js",
    "editor/js/libs/ternjs/infer.js",
    "editor/js/libs/ternjs/doc_comment.js",
    "editor/js/libs/tern-threejs/threejs.js",
    "editor/js/libs/signals.min.js",
    "editor/js/libs/ui.js",
    "editor/js/libs/ui.three.js",
    "editor/js/libs/html2canvas.js",
    "editor/js/libs/three.html.js",
    "editor/js/libs/app.js",
    "editor/js/Player.js",
    "editor/js/Script.js",
    "examples/js/vr/WebVR.js",
    "editor/js/Storage.js",
    "editor/js/Editor.js",
    "editor/js/Config.js",
    "editor/js/History.js",
    "editor/js/Loader.js",
    "editor/js/Menubar.js",
    "editor/js/Menubar.File.js",
    "editor/js/Menubar.Edit.js",
    "editor/js/Menubar.Add.js",
    "editor/js/Menubar.Play.js",
    "editor/js/Menubar.Examples.js",
    "editor/js/Menubar.Help.js",
    "editor/js/Menubar.Status.js",
    "editor/js/Sidebar.js",
    "editor/js/Sidebar.Scene.js",
    "editor/js/Sidebar.Project.js",
    "editor/js/Sidebar.Settings.js",
    "editor/js/Sidebar.Settings.Shortcuts.js",
    "editor/js/Sidebar.Settings.Viewport.js",
    "editor/js/Sidebar.Properties.js",
    "editor/js/Sidebar.Object.js",
    "editor/js/Sidebar.Geometry.js",
    "editor/js/Sidebar.Geometry.Geometry.js",
    "editor/js/Sidebar.Geometry.BufferGeometry.js",
    "editor/js/Sidebar.Geometry.Modifiers.js",
    "editor/js/Sidebar.Geometry.BoxGeometry.js",
    "editor/js/Sidebar.Geometry.CircleGeometry.js",
    "editor/js/Sidebar.Geometry.CylinderGeometry.js",
    "editor/js/Sidebar.Geometry.IcosahedronGeometry.js",
    "editor/js/Sidebar.Geometry.PlaneGeometry.js",
    "editor/js/Sidebar.Geometry.SphereGeometry.js",
    "editor/js/Sidebar.Geometry.TorusGeometry.js",
    "editor/js/Sidebar.Geometry.TorusKnotGeometry.js",
    "examples/js/geometries/TeapotBufferGeometry.js",
    "editor/js/Sidebar.Geometry.TeapotBufferGeometry.js",
    "editor/js/Sidebar.Geometry.LatheGeometry.js",
    "editor/js/Sidebar.Geometry.LineSegments.js",
    "editor/js/Sidebar.Material.js",
    "editor/js/Sidebar.Animation.js",
    "editor/js/Sidebar.Script.js",
    "editor/js/Sidebar.History.js",
    "editor/js/Toolbar.js",
    "editor/js/Viewport.js",
    "editor/js/Viewport.Info.js",
    "editor/js/Command.js",
    "editor/js/commands/AddObjectCommand.js",
    "editor/js/commands/RemoveObjectCommand.js",
    "editor/js/commands/MoveObjectCommand.js",
    "editor/js/commands/SetPositionCommand.js",
    "editor/js/commands/SetRotationCommand.js",
    "editor/js/commands/SetScaleCommand.js",
    "editor/js/commands/SetValueCommand.js",
    "editor/js/commands/SetUuidCommand.js",
    "editor/js/commands/SetColorCommand.js",
    "editor/js/commands/SetGeometryCommand.js",
    "editor/js/commands/SetGeometryValueCommand.js",
    "editor/js/commands/MultiCmdsCommand.js",
    "editor/js/commands/AddScriptCommand.js",
    "editor/js/commands/RemoveScriptCommand.js",
    "editor/js/commands/SetScriptValueCommand.js",
    "editor/js/commands/SetMaterialCommand.js",
    "editor/js/commands/SetMaterialValueCommand.js",
    "editor/js/commands/SetMaterialColorCommand.js",
    "editor/js/commands/SetMaterialMapCommand.js",
    "editor/js/commands/SetSceneCommand.js",
];

//export const THREE_D_MOL_BASE_URL = "http://tk2-403-42830.vs.sakura.ne.jp";
export const THREE_D_MOL_BASE_URL = "http://192.168.137.147";

export const THREE_D_MOL_SOURCES = [
    "three.js/examples/js/libs/system.min.js",
    "three.js/examples/js/controls/EditorControls.js",
    "three.js/examples/js/controls/TransformControls.js",
    "three.js/examples/js/libs/jszip.min.js",
    "three.js/examples/js/libs/inflate.min.js",
    "three.js/examples/js/loaders/AMFLoader.js",
    "three.js/examples/js/loaders/AWDLoader.js",
    "three.js/examples/js/loaders/BabylonLoader.js",
    "three.js/examples/js/loaders/ColladaLoader.js",
    "three.js/examples/js/loaders/FBXLoader.js",
    "three.js/examples/js/loaders/GLTFLoader.js",
    "three.js/examples/js/loaders/deprecated/LegacyGLTFLoader.js",
    "three.js/examples/js/loaders/KMZLoader.js",
    "three.js/examples/js/loaders/MD2Loader.js",
    "three.js/examples/js/loaders/OBJLoader.js",
    "three.js/examples/js/loaders/MTLLoader.js",
    "three.js/examples/js/loaders/PlayCanvasLoader.js",
    "three.js/examples/js/loaders/PLYLoader.js",
    "three.js/examples/js/loaders/STLLoader.js",
    "three.js/examples/js/loaders/SVGLoader.js",
    "three.js/examples/js/loaders/TGALoader.js",
    "three.js/examples/js/loaders/TDSLoader.js",
    "three.js/examples/js/loaders/VRMLLoader.js",
    "three.js/examples/js/loaders/VTKLoader.js",
    "three.js/examples/js/loaders/ctm/lzma.js",
    "three.js/examples/js/loaders/ctm/ctm.js",
    "three.js/examples/js/loaders/ctm/CTMLoader.js",
    "three.js/examples/js/exporters/GLTFExporter.js",
    "three.js/examples/js/exporters/OBJExporter.js",
    "three.js/examples/js/exporters/STLExporter.js",
    "three.js/examples/js/renderers/Projector.js",
    "three.js/examples/js/renderers/RaytracingRenderer.js",
    "three.js/examples/js/renderers/SoftwareRenderer.js",
    "three.js/examples/js/renderers/SVGRenderer.js",
    "three.js/editor/js/libs/codemirror/codemirror.js",
    "three.js/editor/js/libs/codemirror/mode/javascript.js",
    "three.js/editor/js/libs/codemirror/mode/glsl.js",
    "three.js/editor/js/libs/esprima.js",
    "three.js/editor/js/libs/jsonlint.js",
    "three.js/editor/js/libs/glslprep.min.js",
    "three.js/editor/js/libs/codemirror/addon/dialog.js",
    "three.js/editor/js/libs/codemirror/addon/show-hint.js",
    "three.js/editor/js/libs/codemirror/addon/tern.js",
    "three.js/editor/js/libs/acorn/acorn.js",
    "three.js/editor/js/libs/acorn/acorn_loose.js",
    "three.js/editor/js/libs/acorn/walk.js",
    "three.js/editor/js/libs/ternjs/polyfill.js",
    "three.js/editor/js/libs/ternjs/signal.js",
    "three.js/editor/js/libs/ternjs/tern.js",
    "three.js/editor/js/libs/ternjs/def.js",
    "three.js/editor/js/libs/ternjs/comment.js",
    "three.js/editor/js/libs/ternjs/infer.js",
    "three.js/editor/js/libs/ternjs/doc_comment.js",
    "three.js/editor/js/libs/tern-threejs/threejs.js",
    "three.js/editor/js/libs/signals.min.js",
    "three.js/editor/js/libs/ui.js",
    "three.js/editor/js/libs/ui.three.js",
    "three.js/editor/js/libs/html2canvas.js",
    "three.js/editor/js/libs/three.html.js",
    "three.js/editor/js/libs/app.js",
    "three.js/editor/js/Player.js",
    "three.js/editor/js/Script.js",
    "three.js/examples/js/vr/WebVR.js",
    "three.js/editor/js/Angle.js",
    "three.js/editor/js/Atom.js",
    "three.js/editor/js/Bond.js",
    "three.js/editor/js/CMLExporter.js",
    "three.js/editor/js/Storage.js",
    "three.js/editor/js/Editor.js",
    "three.js/editor/js/Config.js",
    "three.js/editor/js/Dihedral.js",
    "three.js/editor/js/History.js",
    "three.js/editor/js/HydrogenTools.js",
    "three.js/editor/js/Loader.js",
    "three.js/editor/js/CmlLoader.js",
    "three.js/editor/js/Menubar.js",
    "three.js/editor/js/Menubar.File.js",
    "three.js/editor/js/Menubar.Edit.js",
    "three.js/editor/js/Menubar.Add.js",
    "three.js/editor/js/Menubar.Play.js",
    "three.js/editor/js/Menubar.Examples.js",
    "three.js/editor/js/Menubar.Help.js",
    "three.js/editor/js/Menubar.Status.js",
    "three.js/editor/js/Molecule.js",
    "three.js/editor/js/Sidebar.js",
    "three.js/editor/js/Sidebar.Scene.js",
    "three.js/editor/js/Sidebar.Project.js",
    "three.js/editor/js/Sidebar.Settings.js",
    "three.js/editor/js/Sidebar.Settings.Shortcuts.js",
    "three.js/editor/js/Sidebar.Settings.Viewport.js",
    "three.js/editor/js/Sidebar.Molecule.js",
    "three.js/editor/js/Sidebar.Properties.js",
    "three.js/editor/js/Sidebar.Object.js",
    "three.js/editor/js/Sidebar.Geometry.js",
    "three.js/editor/js/Sidebar.Geometry.Geometry.js",
    "three.js/editor/js/Sidebar.Geometry.BufferGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.Modifiers.js",
    "three.js/editor/js/Sidebar.Geometry.BoxGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.CircleGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.CylinderGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.IcosahedronGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.PlaneGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.SphereGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.TorusGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.TorusKnotGeometry.js",
    "three.js/examples/js/geometries/TeapotBufferGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.TeapotBufferGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.LatheGeometry.js",
    "three.js/editor/js/Sidebar.Geometry.LineSegments.js",
    "three.js/editor/js/Sidebar.Material.js",
    "three.js/editor/js/Sidebar.Animation.js",
    "three.js/editor/js/Sidebar.Script.js",
    "three.js/editor/js/Sidebar.History.js",
    "three.js/editor/js/Toolbar.js",
    "three.js/editor/js/Viewport.js",
    "three.js/editor/js/Viewport.Info.js",
    "three.js/editor/js/Command.js",
    "three.js/editor/js/commands/AddAtomCommand.js",
    "three.js/editor/js/commands/AddBondCommand.js",
    "three.js/editor/js/commands/AddObjectCommand.js",
    "three.js/editor/js/commands/DeleteAtomBondCommand.js",
    "three.js/editor/js/commands/RemoveObjectCommand.js",
    "three.js/editor/js/commands/SetAtomElementCommand.js",
    "three.js/editor/js/commands/SetBondOrderCommand.js",
    "three.js/editor/js/commands/MoveObjectCommand.js",
    "three.js/editor/js/commands/SetPositionCommand.js",
    "three.js/editor/js/commands/SetRotationCommand.js",
    "three.js/editor/js/commands/SetScaleCommand.js",
    "three.js/editor/js/commands/SetValueCommand.js",
    "three.js/editor/js/commands/SetUuidCommand.js",
    "three.js/editor/js/commands/SetColorCommand.js",
    "three.js/editor/js/commands/SetGeometryCommand.js",
    "three.js/editor/js/commands/SetGeometryValueCommand.js",
    "three.js/editor/js/commands/MultiCmdsCommand.js",
    "three.js/editor/js/commands/AddScriptCommand.js",
    "three.js/editor/js/commands/RemoveScriptCommand.js",
    "three.js/editor/js/commands/SetScriptValueCommand.js",
    "three.js/editor/js/commands/SetMaterialCommand.js",
    "three.js/editor/js/commands/SetMaterialValueCommand.js",
    "three.js/editor/js/commands/SetMaterialColorCommand.js",
    "three.js/editor/js/commands/SetMaterialMapCommand.js",
    "three.js/editor/js/commands/SetSceneCommand.js",
];

export const BOUNDARY_CONDITIONS = [
    {
        type: "pbc",
        name: "Periodic Boundary Condition (pbc)",
        isNonPeriodic: false
    },
    {
        type: "bc1",
        name: "Vacuum-Slab-Vacuum (bc1)",
        isNonPeriodic: true
    },
    {
        type: "bc2",
        name: "Metal-Slab-Metal (bc2)",
        isNonPeriodic: true
    },
    {
        type: "bc3",
        name: "Vacuum-Slab-Metal (bc3)",
        isNonPeriodic: true
    }
];
