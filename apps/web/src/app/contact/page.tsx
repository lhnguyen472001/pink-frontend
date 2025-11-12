import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

<div className="max-w-7xl mx-auto px-8 py-16">
    <div className="text-center mb-12">
        <Badge className="mb-4 bg-linear-to-r from-cyan-500 to-teal-500 text-white">
            Est. 2020
        </Badge>
        <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Our Story
        </h2>
        <p className="text-xl text-gray-600">
            From Crisis to Confidence
        </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="md:col-span-2 md:row-span-2 bg-linear-to-br from-cyan-50 via-white to-teal-50 border-2 border-cyan-200 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                            <span className="text-2xl">🌸</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">2020</h3>
                            <p className="text-sm text-gray-600">COVID-19 Era</p>
                        </div>
                    </div>

                    <h4 className="text-2xl font-bold text-gray-800 mb-4">
                        Born from Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Founded in 2020 during the challenging COVID-19 period, Pink Accounting & Tax Solutions was born from a mission to help South-East Queensland business owners navigate uncertainty and emerge stronger.
                    </p>

                    <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-cyan-100">
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                            Evolved with Purpose
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            What started as supporting businesses through crisis has evolved into a specialised practice helping growth-focused service-based companies scale with confidence.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="bg-cyan-100 text-cyan-700">
                        South-East QLD
                    </Badge>
                    <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                        Service-Based Focus
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        Growth Partners
                    </Badge>
                </div>
            </CardContent>
        </Card>

        <Card className="bg-linear-to-br from-cyan-500 to-cyan-600 text-white hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold mb-2">5+</div>
                <p className="text-cyan-100">Years Strong</p>
                <p className="text-sm text-cyan-200 mt-2">Since 2020</p>
            </CardContent>
        </Card>

        <Card className="bg-linear-to-br from-teal-500 to-teal-600 text-white hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
                <div className="text-5xl mb-2">💼</div>
                <p className="text-teal-100 font-semibold">Strategic</p>
                <p className="text-sm text-teal-200 mt-2">Financial Management</p>
            </CardContent>
        </Card>
    </div>

    <Tabs defaultValue="leadership" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="leadership" className="text-lg">
                Leadership
            </TabsTrigger>
            <TabsTrigger value="promise" className="text-lg">
                Our Promise
            </TabsTrigger>
        </TabsList>

        <TabsContent value="leadership">
            <Card className="border-2 border-cyan-200 overflow-hidden">
                <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                        <div className="bg-linear-to-br from-cyan-500 to-teal-500 p-12 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-xl">
                                    <span className="text-6xl">👩‍💼</span>
                                </div>
                                <div className="text-white">
                                    <h4 className="text-2xl font-bold mb-1">Pinky Bui</h4>
                                    <Badge className="bg-white/20 text-white border-white/30">
                                        Principal Accountant
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 p-8 bg-linear-to-br from-gray-50 to-white">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                Expert Leadership
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Qualified Accountant</p>
                                        <p className="text-sm text-gray-600">Fully certified and experienced professional</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">IPA Member</p>
                                        <p className="text-sm text-gray-600">Official member of the Institute of Public Accountants</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Technical Excellence</p>
                                        <p className="text-sm text-gray-600">Combines expertise with real-world business acumen</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="promise">
            <Card className="border-2 border-teal-200 bg-linear-to-br from-teal-50 to-cyan-50">
                <CardContent className="p-12 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-cyan-500 to-teal-500 rounded-2xl mb-8 shadow-xl">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h3 className="text-4xl font-bold bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6">
                            Our Promise to You
                        </h3>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                                <div className="text-4xl mb-3">✨</div>
                                <h4 className="font-bold text-gray-800 mb-2">Quality Work</h4>
                                <p className="text-sm text-gray-600">Excellence in every detail</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                                <div className="text-4xl mb-3">🤝</div>
                                <h4 className="font-bold text-gray-800 mb-2">Accessible Service</h4>
                                <p className="text-sm text-gray-600">Always here when you need us</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                                <div className="text-4xl mb-3">🚀</div>
                                <h4 className="font-bold text-gray-800 mb-2">Dedicated Partnership</h4>
                                <p className="text-sm text-gray-600">Growing together at every stage</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    </Tabs>
</div>