import mongoose from "mongoose";
import { Log } from "web3-core";
export type LogDocument = Log & mongoose.Document;

const LogSchema = new mongoose.Schema({
    counter:Number,
    address: String,
    contractHash:String,
    blockHash: String,
    blockNumber: Number,
    timestamp:Number,
    data: String,
    logIndex: Number,
    removed:Boolean,
    topics:Array,
    transactionHash:String,
    transactionIndex:Number,
    id:String,
    event:String,
    argsCount:Number,
    argsTypes:Array,
    args:Array
}, { timestamps: true });

export const LogModel = mongoose.model<LogDocument>("Log", LogSchema);