var searchModule = function() {
var idMap = [];
function y(e){idMap.push(e);}
var idx = lunr(function() {
this.field('title', { boost: 10})
this.field('content')
this.field('description', { boost: 5})
this.field('tags', { boost: 50})
this.ref('id')

this.pipeline.remove(lunr.stopWordFilter);
})
function a(e){idx.add(e);}

a({
id:0,
title:"github",
content:"github",
description:'',
tags:''
});
a({
id:1,
title:"iassemblycollection",
content:"iassemblycollection",
description:'',
tags:''
});
a({
id:2,
title:"iindentedtraceevent",
content:"iindentedtraceevent",
description:'',
tags:''
});
a({
id:3,
title:"actionfilesystemwatcher",
content:"actionfilesystemwatcher",
description:'',
tags:''
});
a({
id:4,
title:"download",
content:"download",
description:'',
tags:''
});
a({
id:5,
title:"sitemap",
content:"sitemap",
description:'',
tags:''
});
a({
id:6,
title:"engine",
content:"engine",
description:'',
tags:''
});
a({
id:7,
title:"imetadatavalue",
content:"imetadatavalue",
description:'',
tags:''
});
a({
id:8,
title:"documentcollectionextensions",
content:"documentcollectionextensions",
description:'',
tags:''
});
a({
id:9,
title:"analyzecsharp",
content:"analyzecsharp",
description:'',
tags:''
});
a({
id:10,
title:"metadataitems",
content:"metadataitems",
description:'',
tags:''
});
a({
id:11,
title:"idocument",
content:"idocument",
description:'',
tags:''
});
a({
id:12,
title:"cacheddelegatemetadatavalue",
content:"cacheddelegatemetadatavalue",
description:'',
tags:''
});
a({
id:13,
title:"iexecutioncache",
content:"iexecutioncache",
description:'',
tags:''
});
a({
id:14,
title:"where",
content:"where",
description:'',
tags:''
});
a({
id:15,
title:"crc",
content:"crc",
description:'',
tags:''
});
a({
id:16,
title:"hueinstruction",
content:"hueinstruction",
description:'',
tags:''
});
a({
id:17,
title:"generatemeta",
content:"generatemeta",
description:'',
tags:''
});
a({
id:18,
title:"excerpt",
content:"excerpt",
description:'',
tags:''
});
a({
id:19,
title:"fileinfoextensions",
content:"fileinfoextensions",
description:'',
tags:''
});
a({
id:20,
title:"exitcode",
content:"exitcode",
description:'',
tags:''
});
a({
id:21,
title:"paginate",
content:"paginate",
description:'',
tags:''
});
a({
id:22,
title:"ireadonlypipeline",
content:"ireadonlypipeline",
description:'',
tags:''
});
a({
id:23,
title:"razor",
content:"razor",
description:'',
tags:''
});
a({
id:24,
title:"imageinstruction",
content:"imageinstruction",
description:'',
tags:''
});
a({
id:25,
title:"corekeys",
content:"corekeys",
description:'',
tags:''
});
a({
id:26,
title:"pathhelper",
content:"pathhelper",
description:'',
tags:''
});
a({
id:27,
title:"documents",
content:"documents",
description:'',
tags:''
});
a({
id:28,
title:"ipipeline",
content:"ipipeline",
description:'',
tags:''
});
a({
id:29,
title:"imodule",
content:"imodule",
description:'',
tags:''
});
a({
id:30,
title:"typehelper",
content:"typehelper",
description:'',
tags:''
});
a({
id:31,
title:"replace",
content:"replace",
description:'',
tags:''
});
a({
id:32,
title:"trace",
content:"trace",
description:'',
tags:''
});
a({
id:33,
title:"baserazorpage",
content:"baserazorpage",
description:'',
tags:''
});
a({
id:34,
title:"safeiohelper",
content:"safeiohelper",
description:'',
tags:''
});
a({
id:35,
title:"extensionlessurlsoptions",
content:"extensionlessurlsoptions",
description:'',
tags:''
});
a({
id:36,
title:"contentmodule",
content:"contentmodule",
description:'',
tags:''
});
a({
id:37,
title:"imetadata",
content:"imetadata",
description:'',
tags:''
});
a({
id:38,
title:"readsolution",
content:"readsolution",
description:'',
tags:''
});
a({
id:39,
title:"othercomment",
content:"othercomment",
description:'',
tags:''
});
a({
id:40,
title:"copyfiles",
content:"copyfiles",
description:'',
tags:''
});
a({
id:41,
title:"image",
content:"image",
description:'',
tags:''
});
a({
id:42,
title:"documentfileprovider",
content:"documentfileprovider",
description:'',
tags:''
});
a({
id:43,
title:"generatecontent",
content:"generatecontent",
description:'',
tags:''
});
a({
id:44,
title:"iconfig",
content:"iconfig",
description:'',
tags:''
});
a({
id:45,
title:"htmlescape",
content:"htmlescape",
description:'',
tags:''
});
a({
id:46,
title:"groupby",
content:"groupby",
description:'',
tags:''
});
a({
id:47,
title:"htmlhelper",
content:"htmlhelper",
description:'',
tags:''
});
a({
id:48,
title:"idocumentcollection",
content:"idocumentcollection",
description:'',
tags:''
});
a({
id:49,
title:"generatejson",
content:"generatejson",
description:'',
tags:''
});
a({
id:50,
title:"referencecomment",
content:"referencecomment",
description:'',
tags:''
});
a({
id:51,
title:"codeanalysiskeys",
content:"codeanalysiskeys",
description:'',
tags:''
});
a({
id:52,
title:"readfiles",
content:"readfiles",
description:'',
tags:''
});
a({
id:53,
title:"gitmodule",
content:"gitmodule",
description:'',
tags:''
});
a({
id:54,
title:"metadataitem",
content:"metadataitem",
description:'',
tags:''
});
a({
id:55,
title:"extensionlessurlsmiddleware",
content:"extensionlessurlsmiddleware",
description:'',
tags:''
});
a({
id:56,
title:"searchindex",
content:"searchindex",
description:'',
tags:''
});
a({
id:57,
title:"imagefilter",
content:"imagefilter",
description:'',
tags:''
});
a({
id:58,
title:"documentconfig",
content:"documentconfig",
description:'',
tags:''
});
a({
id:59,
title:"index",
content:"index",
description:'',
tags:''
});
a({
id:60,
title:"less",
content:"less",
description:'',
tags:''
});
a({
id:61,
title:"replacein",
content:"replacein",
description:'',
tags:''
});
a({
id:62,
title:"imetadata",
content:"imetadata",
description:'',
tags:''
});
a({
id:63,
title:"orderby",
content:"orderby",
description:'',
tags:''
});
a({
id:64,
title:"gitcontributors",
content:"gitcontributors",
description:'',
tags:''
});
a({
id:65,
title:"changefrequency",
content:"changefrequency",
description:'',
tags:''
});
a({
id:66,
title:"readproject",
content:"readproject",
description:'',
tags:''
});
a({
id:67,
title:"sitemapitem",
content:"sitemapitem",
description:'',
tags:''
});
a({
id:68,
title:"delegatemetadatavalue",
content:"delegatemetadatavalue",
description:'',
tags:''
});
a({
id:69,
title:"concat",
content:"concat",
description:'',
tags:''
});
a({
id:70,
title:"if",
content:"if",
description:'',
tags:''
});
a({
id:71,
title:"ipipelinecollection",
content:"ipipelinecollection",
description:'',
tags:''
});
a({
id:72,
title:"irepository",
content:"irepository",
description:'',
tags:''
});
a({
id:73,
title:"rantmodule",
content:"rantmodule",
description:'',
tags:''
});
a({
id:74,
title:"execute",
content:"execute",
description:'',
tags:''
});
a({
id:75,
title:"xmp",
content:"xmp",
description:'',
tags:''
});
a({
id:76,
title:"filename",
content:"filename",
description:'',
tags:''
});
a({
id:77,
title:"gitcommits",
content:"gitcommits",
description:'',
tags:''
});
a({
id:78,
title:"frontmatter",
content:"frontmatter",
description:'',
tags:''
});
a({
id:79,
title:"iexecutioncontext",
content:"iexecutioncontext",
description:'',
tags:''
});
a({
id:80,
title:"autolink",
content:"autolink",
description:'',
tags:''
});
a({
id:81,
title:"json",
content:"json",
description:'',
tags:''
});
a({
id:82,
title:"configextensions",
content:"configextensions",
description:'',
tags:''
});
a({
id:83,
title:"xslt",
content:"xslt",
description:'',
tags:''
});
a({
id:84,
title:"keys",
content:"keys",
description:'',
tags:''
});
a({
id:85,
title:"exceltocsv",
content:"exceltocsv",
description:'',
tags:''
});
a({
id:86,
title:"searchindexitem",
content:"searchindexitem",
description:'',
tags:''
});
a({
id:87,
title:"gitkeys",
content:"gitkeys",
description:'',
tags:''
});
a({
id:88,
title:"yaml",
content:"yaml",
description:'',
tags:''
});
a({
id:89,
title:"anchorposition",
content:"anchorposition",
description:'',
tags:''
});
a({
id:90,
title:"meta",
content:"meta",
description:'',
tags:''
});
a({
id:91,
title:"htmlquery",
content:"htmlquery",
description:'',
tags:''
});
a({
id:92,
title:"concatbranch",
content:"concatbranch",
description:'',
tags:''
});
a({
id:93,
title:"requestheader",
content:"requestheader",
description:'',
tags:''
});
a({
id:94,
title:"rss",
content:"rss",
description:'',
tags:''
});
a({
id:95,
title:"ipackagescollection",
content:"ipackagescollection",
description:'',
tags:''
});
a({
id:96,
title:"itrace",
content:"itrace",
description:'',
tags:''
});
a({
id:97,
title:"contextconfig",
content:"contextconfig",
description:'',
tags:''
});
a({
id:98,
title:"interlockedbool",
content:"interlockedbool",
description:'',
tags:''
});
a({
id:99,
title:"switch",
content:"switch",
description:'',
tags:''
});
a({
id:100,
title:"directorymeta",
content:"directorymeta",
description:'',
tags:''
});
a({
id:101,
title:"markdown",
content:"markdown",
description:'',
tags:''
});
a({
id:102,
title:"trace",
content:"trace",
description:'',
tags:''
});
a({
id:103,
title:"readworkspace",
content:"readworkspace",
description:'',
tags:''
});
a({
id:104,
title:"confighelper",
content:"confighelper",
description:'',
tags:''
});
a({
id:105,
title:"extensionlessurlsextensions",
content:"extensionlessurlsextensions",
description:'',
tags:''
});
a({
id:106,
title:"unwrittenfiles",
content:"unwrittenfiles",
description:'',
tags:''
});
a({
id:107,
title:"branch",
content:"branch",
description:'',
tags:''
});
a({
id:108,
title:"writefiles",
content:"writefiles",
description:'',
tags:''
});
a({
id:109,
title:"append",
content:"append",
description:'',
tags:''
});
a({
id:110,
title:"csvtohtml",
content:"csvtohtml",
description:'',
tags:''
});
a({
id:111,
title:"searchindexkeys",
content:"searchindexkeys",
description:'',
tags:''
});
a({
id:112,
title:"prepend",
content:"prepend",
description:'',
tags:''
});
a({
id:113,
title:"program",
content:"program",
description:'',
tags:''
});
a({
id:114,
title:"content",
content:"content",
description:'',
tags:''
});
a({
id:115,
title:"foreach",
content:"foreach",
description:'',
tags:''
});
y({url:'/api/Wyam.Modules.GitHub/F572B61F/index.html',title:"GitHub",description:""});
y({url:'/api/Wyam.Common.Configuration/D3B63CC2/index.html',title:"IAssemblyCollection",description:""});
y({url:'/api/Wyam.Common.Tracing/51754161/index.html',title:"IIndentedTraceEvent",description:""});
y({url:'/api/Wyam/919B9391/index.html',title:"ActionFileSystemWatcher",description:""});
y({url:'/api/Wyam.Core.Modules.IO/E07CEC04/index.html',title:"Download",description:""});
y({url:'/api/Wyam.Core.Modules.Contents/A5845747/index.html',title:"Sitemap",description:""});
y({url:'/api/Wyam.Core/E0F89CF7/index.html',title:"Engine",description:""});
y({url:'/api/Wyam.Common.Meta/0BFBB658/index.html',title:"IMetadataValue",description:""});
y({url:'/api/Wyam.Common.Documents/43457658/index.html',title:"DocumentCollectionExtensions",description:""});
y({url:'/api/Wyam.Modules.CodeAnalysis/61476D38/index.html',title:"AnalyzeCSharp",description:""});
y({url:'/api/Wyam.Common.Meta/FBA8D7C9/index.html',title:"MetadataItems",description:""});
y({url:'/api/Wyam.Common.Documents/F359E898/index.html',title:"IDocument",description:""});
y({url:'/api/Wyam.Common.Meta/B2F39640/index.html',title:"CachedDelegateMetadataValue",description:""});
y({url:'/api/Wyam.Common.Caching/17C8DD70/index.html',title:"IExecutionCache",description:""});
y({url:'/api/Wyam.Core.Modules.Control/4E935530/index.html',title:"Where",description:""});
y({url:'/api/Wyam.Common.Caching/7119E3DC/index.html',title:"Crc32",description:""});
y({url:'/api/Wyam.Modules.Images/7045FBB4/index.html',title:"HueInstruction",description:""});
y({url:'/api/Wyam.Modules.TextGeneration/0B4F0714/index.html',title:"GenerateMeta",description:""});
y({url:'/api/Wyam.Modules.Html/6C41C8B2/index.html',title:"Excerpt",description:""});
y({url:'/api/Wyam.Modules.Razor/4894B27E/index.html',title:"FileInfoExtensions",description:""});
y({url:'/api/Wyam/3E038DF3/index.html',title:"ExitCode",description:""});
y({url:'/api/Wyam.Core.Modules.Control/2B4112E9/index.html',title:"Paginate",description:""});
y({url:'/api/Wyam.Common.Pipelines/BDA9DFC9/index.html',title:"IReadOnlyPipeline",description:""});
y({url:'/api/Wyam.Modules.Razor/5AA0F610/index.html',title:"Razor",description:""});
y({url:'/api/Wyam.Modules.Images/D27390C7/index.html',title:"ImageInstruction",description:""});
y({url:'/api/Wyam.Core.Meta/ACA7ADD9/index.html',title:"CoreKeys",description:""});
y({url:'/api/Wyam.Common.IO/A3AE1875/index.html',title:"PathHelper",description:""});
y({url:'/api/Wyam.Core.Modules.Control/872B0C59/index.html',title:"Documents",description:""});
y({url:'/api/Wyam.Common.Pipelines/0097746F/index.html',title:"IPipeline",description:""});
y({url:'/api/Wyam.Common.Modules/09D712E1/index.html',title:"IModule",description:""});
y({url:'/api/Wyam.Core/FFC0A751/index.html',title:"TypeHelper",description:""});
y({url:'/api/Wyam.Core.Modules.Contents/2DD99B48/index.html',title:"Replace",description:""});
y({url:'/api/Wyam.Core.Modules.Extensibility/044EB768/index.html',title:"Trace",description:""});
y({url:'/api/Wyam.Modules.Razor/D8E348A4/index.html',title:"BaseRazorPage",description:""});
y({url:'/api/Wyam.Common.IO/D84F401B/index.html',title:"SafeIOHelper",description:""});
y({url:'/api/Wyam.Owin/E4F34773/index.html',title:"ExtensionlessUrlsOptions",description:""});
y({url:'/api/Wyam.Common.Modules/035B5B42/index.html',title:"ContentModule",description:""});
y({url:'/api/Wyam.Common.Meta/58B9208C/index.html',title:"IMetadata<T>",description:""});
y({url:'/api/Wyam.Modules.CodeAnalysis/CC920BBB/index.html',title:"ReadSolution",description:""});
y({url:'/api/Wyam.Modules.CodeAnalysis/DBEC1D86/index.html',title:"OtherComment",description:""});
y({url:'/api/Wyam.Core.Modules.IO/006ACCBB/index.html',title:"CopyFiles",description:""});
y({url:'/api/Wyam.Modules.Images/208ABA3E/index.html',title:"Image",description:""});
y({url:'/api/Wyam.Modules.Razor/907E73C6/index.html',title:"DocumentFileProvider",description:""});
y({url:'/api/Wyam.Modules.TextGeneration/FC7AA844/index.html',title:"GenerateContent",description:""});
y({url:'/api/Wyam.Common.Configuration/36C3A196/index.html',title:"IConfig",description:""});
y({url:'/api/Wyam.Modules.Html/B29F6A99/index.html',title:"HtmlEscape",description:""});
y({url:'/api/Wyam.Core.Modules.Control/709AAAA5/index.html',title:"GroupBy",description:""});
y({url:'/api/Wyam.Modules.Razor/1E639FE4/index.html',title:"HtmlHelper",description:""});
y({url:'/api/Wyam.Common.Documents/DAA0881A/index.html',title:"IDocumentCollection",description:""});
y({url:'/api/Wyam.Modules.Json/86E28796/index.html',title:"GenerateJson",description:""});
y({url:'/api/Wyam.Modules.CodeAnalysis/CDFE7AE9/index.html',title:"ReferenceComment",description:""});
y({url:'/api/Wyam.Modules.CodeAnalysis/8AB530DD/index.html',title:"CodeAnalysisKeys",description:""});
y({url:'/api/Wyam.Core.Modules.IO/C5A656EF/index.html',title:"ReadFiles",description:""});
y({url:'/api/Wyam.Modules.Git/188F524E/index.html',title:"GitModule",description:""});
y({url:'/api/Wyam.Common.Meta/260DE2D4/index.html',title:"MetadataItem",description:""});
y({url:'/api/Wyam.Owin/F0489B88/index.html',title:"ExtensionlessUrlsMiddleware",description:""});
y({url:'/api/Wyam.Modules.SearchIndex/0780B42F/index.html',title:"SearchIndex",description:""});
y({url:'/api/Wyam.Modules.Images/4A91A8D8/index.html',title:"ImageFilter",description:""});
y({url:'/api/Wyam.Common.Configuration/10CB7479/index.html',title:"DocumentConfig",description:""});
y({url:'/api/Wyam.Core.Modules.Metadata/78768B35/index.html',title:"Index",description:""});
y({url:'/api/Wyam.Modules.Less/B437792B/index.html',title:"Less",description:""});
y({url:'/api/Wyam.Core.Modules.Contents/E8D24D15/index.html',title:"ReplaceIn",description:""});
y({url:'/api/Wyam.Common.Meta/1D453919/index.html',title:"IMetadata",description:""});
y({url:'/api/Wyam.Core.Modules.Control/F76608B2/index.html',title:"OrderBy",description:""});
y({url:'/api/Wyam.Modules.Git/C63ED536/index.html',title:"GitContributors",description:""});
y({url:'/api/Wyam.Core.Modules.Contents/BD9E3958/index.html',title:"ChangeFrequency",description:""});
y({url:'/api/Wyam.Modules.CodeAnalysis/1D61ABA3/index.html',title:"ReadProject",description:""});
y({url:'/api/Wyam.Core.Modules.Contents/EBCFE23E/index.html',title:"SitemapItem",description:""});
y({url:'/api/Wyam.Common.Meta/4854B78E/index.html',title:"DelegateMetadataValue",description:""});
y({url:'/api/Wyam.Core.Modules.Control/7374D090/index.html',title:"Concat",description:""});
y({url:'/api/Wyam.Core.Modules.Control/B5BA6847/index.html',title:"If",description:""});
y({url:'/api/Wyam.Common.Pipelines/73EA0048/index.html',title:"IPipelineCollection",description:""});
y({url:'/api/Wyam.Common.NuGet/58FFC9D2/index.html',title:"IRepository",description:""});
y({url:'/api/Wyam.Modules.TextGeneration/91666C17/index.html',title:"RantModule",description:""});
y({url:'/api/Wyam.Core.Modules.Extensibility/524BCE4B/index.html',title:"Execute",description:""});
y({url:'/api/Wyam.Modules.Xmp/1C4AF86F/index.html',title:"Xmp",description:""});
y({url:'/api/Wyam.Core.Modules.Metadata/0F4CA627/index.html',title:"FileName",description:""});
y({url:'/api/Wyam.Modules.Git/7582BC95/index.html',title:"GitCommits",description:""});
y({url:'/api/Wyam.Core.Modules.Control/2F8159EC/index.html',title:"FrontMatter",description:""});
y({url:'/api/Wyam.Common.Pipelines/300C4311/index.html',title:"IExecutionContext",description:""});
y({url:'/api/Wyam.Modules.Html/611A044E/index.html',title:"AutoLink",description:""});
y({url:'/api/Wyam.Modules.Json/F7203045/index.html',title:"Json",description:""});
y({url:'/api/Wyam.Common.Configuration/9A8399F1/index.html',title:"ConfigExtensions",description:""});
y({url:'/api/Wyam.Core.Modules.Templates/4B48616B/index.html',title:"Xslt",description:""});
y({url:'/api/Wyam.Common.Meta/70AE72AB/index.html',title:"Keys",description:""});
y({url:'/api/Wyam.Modules.Tables/19B5239F/index.html',title:"ExcelToCsv",description:""});
y({url:'/api/Wyam.Modules.SearchIndex/FCFFB3E8/index.html',title:"SearchIndexItem",description:""});
y({url:'/api/Wyam.Modules.Git/15D598E4/index.html',title:"GitKeys",description:""});
y({url:'/api/Wyam.Modules.Yaml/F65482B5/index.html',title:"Yaml",description:""});
y({url:'/api/Wyam.Modules.Images/DD4329FE/index.html',title:"AnchorPosition",description:""});
y({url:'/api/Wyam.Core.Modules.Metadata/885C2CFF/index.html',title:"Meta",description:""});
y({url:'/api/Wyam.Modules.Html/5A9311C0/index.html',title:"HtmlQuery",description:""});
y({url:'/api/Wyam.Core.Modules.Control/202689E6/index.html',title:"ConcatBranch",description:""});
y({url:'/api/Wyam.Core.Modules.IO/52828D3B/index.html',title:"RequestHeader",description:""});
y({url:'/api/Wyam.Core.Modules.Contents/B7655D44/index.html',title:"Rss",description:""});
y({url:'/api/Wyam.Common.NuGet/7D900737/index.html',title:"IPackagesCollection",description:""});
y({url:'/api/Wyam.Common.Tracing/79C28BC6/index.html',title:"ITrace",description:""});
y({url:'/api/Wyam.Common.Configuration/4E5335AA/index.html',title:"ContextConfig",description:""});
y({url:'/api/Wyam/F2AE36AE/index.html',title:"InterlockedBool",description:""});
y({url:'/api/Wyam.Core.Modules.Control/2A191F61/index.html',title:"Switch",description:""});
y({url:'/api/Wyam.Core.Modules.Metadata/60D1B362/index.html',title:"DirectoryMeta",description:""});
y({url:'/api/Wyam.Modules.Markdown/A8BAA13A/index.html',title:"Markdown",description:""});
y({url:'/api/Wyam.Core.Tracing/B0E95A8B/index.html',title:"Trace",description:""});
y({url:'/api/Wyam.Modules.CodeAnalysis/65BD630E/index.html',title:"ReadWorkspace",description:""});
y({url:'/api/Wyam.Common.Configuration/36C201E7/index.html',title:"ConfigHelper<T>",description:""});
y({url:'/api/Wyam.Owin/2A42A8F0/index.html',title:"ExtensionlessUrlsExtensions",description:""});
y({url:'/api/Wyam.Core.Modules.IO/59667BEB/index.html',title:"UnwrittenFiles",description:""});
y({url:'/api/Wyam.Core.Modules.Control/2D4970B5/index.html',title:"Branch",description:""});
y({url:'/api/Wyam.Core.Modules.IO/327D628C/index.html',title:"WriteFiles",description:""});
y({url:'/api/Wyam.Core.Modules.Contents/C0CCEA1D/index.html',title:"Append",description:""});
y({url:'/api/Wyam.Modules.Tables/1414988C/index.html',title:"CsvToHtml",description:""});
y({url:'/api/Wyam.Modules.SearchIndex/0E9E2643/index.html',title:"SearchIndexKeys",description:""});
y({url:'/api/Wyam.Core.Modules.Contents/F5ECB8B6/index.html',title:"Prepend",description:""});
y({url:'/api/Wyam/02817FA0/index.html',title:"Program",description:""});
y({url:'/api/Wyam.Core.Modules.Contents/C1CDC3BA/index.html',title:"Content",description:""});
y({url:'/api/Wyam.Core.Modules.Control/45D7052F/index.html',title:"ForEach",description:""});

return {
search: function(q) {return idx.search(q).map(function(i){return idMap[i.ref];});}
};
}();