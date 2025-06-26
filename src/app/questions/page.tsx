export const dynamic = "force-dynamic";
export const runtime = "nodejs";


import { databases } from "@/models/server/config";
import { db, questionCollection } from "@/models/name";
import { Query } from "node-appwrite";
import React, { Suspense } from "react";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import QuestionCard from "@/components/QuestionCard";
import Pagination from "@/components/Pagination";
import SearchWrapper from "./SearchWrapper"; // updated

const Page = async () => {
    const questions = await databases.listDocuments(db, questionCollection, [
        Query.limit(25),
    ]);

    const filteredQuestions = questions.documents.filter(
        (ques) => ques.authorId && ques.authorId !== ""
    );

    return (
        <div className="container mx-auto px-4 pb-20 pt-36">
            <div className="mb-10 flex items-center justify-between">
                <h1 className="text-3xl font-bold">All Questions</h1>
                <Link href="/questions/ask">
                    <ShimmerButton className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Ask a question
                        </span>
                    </ShimmerButton>
                </Link>
            </div>

            {/* Wrap search in Suspense */}
            <div className="mb-4">
                <Suspense fallback={<div>Loading search...</div>}>
                    <SearchWrapper />
                </Suspense>
            </div>

            <div className="mb-4">
                <p>{filteredQuestions.length} questions</p>
            </div>
            <div className="mb-4 space-y-6">
                {filteredQuestions.length === 0 ? (
                    <div className="text-gray-400">No questions found.</div>
                ) : (
                    filteredQuestions.map((ques) => (
                        <QuestionCard
                            key={ques.$id}
                            ques={{
                                ...ques,
                                author: ques.author || { name: "Unknown" },
                            }}
                        />
                    ))
                )}
            </div>
            <Pagination total={filteredQuestions.length} limit={25} />
        </div>
    );
};

export default Page;
