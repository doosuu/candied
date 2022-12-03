/* AutoGenerated Code, changes may be overwritten
* INPUT GRAMMAR:
* ---
* import { table2Enum, cleanComment } from "./parserHelpers";
* ---
* Choice := Node | Message | Signal | ValTable | Val | SignalComment | MessageComment | NodeComment
* Node := 'BU_:\s*' raw_node_string={'[a-zA-Z0-9_\s]*'} '\s*' ';'?
*     .node_names = string[] { return raw_node_string.split(' '); }
* Message := 'BO_\s' id={'[0-9]+'} '\s*' name={'[a-zA-Z0-9_]*'} ':\s*' dlc={'[0-9]'} '\s*' node={'[a-zA-Z0-9_]*'}
* Signal := '\s*SG_\s' name={'[a-zA-Z0-9_]+'} '\s*' multiplex={'M|[m0-9]*|\s'} '\s*:\s' start_bit={'[0-9]+'} '\|' length={'[0-9]+'} '@' endian={'[1|0]'} signed={'[+|-]'} '\s\(' factor={'[0-9.]+'} ',' offset={'[0-9.]+'} '\)\s\[' min={'[0-9.]+'} '\|' max={'[0-9.]+'} '\]\s' raw_unit={'".*"'} '\s' raw_node_str={'.*'}
*     .unit = string {return Array.from(raw_unit).filter(l=> l !== '"').toString() ;}
*     .nodes = string[] {return raw_node_str.split(' ');}
* ValTable := 'VAL_TABLE_\s' name={'[a-zA-Z0-9_]+'} '\s' raw_table={'.*'}
*     .enum = Map<number,string> {return table2Enum(raw_table.replace(';',''));}
* Val := 'VAL_\s' id={'[0-9]+'} '\s' name={'[a-zA-Z0-9_]+'} '\s' raw_table={'.*'}
*     .enum = Map<number,string> {return table2Enum(raw_table.replace(';',''));}
* SignalComment := 'CM_ SG_\s' id={'[0-9]+'} '\s' name={'[a-zA-Z0-9_]+'} '\s' raw_comment={'.*'}
*     .comment = string {return cleanComment(raw_comment);}
* MessageComment := 'CM_ BO_\s' id={'[0-9]+'} '\s' raw_comment={'.*'}
*     .comment = string {return cleanComment(raw_comment);}
* NodeComment := 'CM_ BU_\s' name={'[a-zA-Z0-9_]+'} '\s' raw_comment={'.*'}
*     .comment = string {return cleanComment(raw_comment);}
*/

import { table2Enum, cleanComment } from "./parserHelpers";

type Nullable<T> = T | null;
type $$RuleType<T> = () => Nullable<T>;
export interface ASTNodeIntf {
    kind: ASTKinds;
}
export enum ASTKinds {
    Choice_1 = "Choice_1",
    Choice_2 = "Choice_2",
    Choice_3 = "Choice_3",
    Choice_4 = "Choice_4",
    Choice_5 = "Choice_5",
    Choice_6 = "Choice_6",
    Choice_7 = "Choice_7",
    Choice_8 = "Choice_8",
    Node = "Node",
    Node_$0 = "Node_$0",
    Message = "Message",
    Message_$0 = "Message_$0",
    Message_$1 = "Message_$1",
    Message_$2 = "Message_$2",
    Message_$3 = "Message_$3",
    Signal = "Signal",
    Signal_$0 = "Signal_$0",
    Signal_$1 = "Signal_$1",
    Signal_$2 = "Signal_$2",
    Signal_$3 = "Signal_$3",
    Signal_$4 = "Signal_$4",
    Signal_$5 = "Signal_$5",
    Signal_$6 = "Signal_$6",
    Signal_$7 = "Signal_$7",
    Signal_$8 = "Signal_$8",
    Signal_$9 = "Signal_$9",
    Signal_$10 = "Signal_$10",
    Signal_$11 = "Signal_$11",
    ValTable = "ValTable",
    ValTable_$0 = "ValTable_$0",
    ValTable_$1 = "ValTable_$1",
    Val = "Val",
    Val_$0 = "Val_$0",
    Val_$1 = "Val_$1",
    Val_$2 = "Val_$2",
    SignalComment = "SignalComment",
    SignalComment_$0 = "SignalComment_$0",
    SignalComment_$1 = "SignalComment_$1",
    SignalComment_$2 = "SignalComment_$2",
    MessageComment = "MessageComment",
    MessageComment_$0 = "MessageComment_$0",
    MessageComment_$1 = "MessageComment_$1",
    NodeComment = "NodeComment",
    NodeComment_$0 = "NodeComment_$0",
    NodeComment_$1 = "NodeComment_$1",
}
export type Choice = Choice_1 | Choice_2 | Choice_3 | Choice_4 | Choice_5 | Choice_6 | Choice_7 | Choice_8;
export type Choice_1 = Node;
export type Choice_2 = Message;
export type Choice_3 = Signal;
export type Choice_4 = ValTable;
export type Choice_5 = Val;
export type Choice_6 = SignalComment;
export type Choice_7 = MessageComment;
export type Choice_8 = NodeComment;
export class Node {
    public kind: ASTKinds.Node = ASTKinds.Node;
    public raw_node_string: Node_$0;
    public node_names: string[];
    constructor(raw_node_string: Node_$0){
        this.raw_node_string = raw_node_string;
        this.node_names = ((): string[] => {
        return raw_node_string.split(' ');
        })();
    }
}
export type Node_$0 = string;
export interface Message {
    kind: ASTKinds.Message;
    id: Message_$0;
    name: Message_$1;
    dlc: Message_$2;
    node: Message_$3;
}
export type Message_$0 = string;
export type Message_$1 = string;
export type Message_$2 = string;
export type Message_$3 = string;
export class Signal {
    public kind: ASTKinds.Signal = ASTKinds.Signal;
    public name: Signal_$0;
    public multiplex: Signal_$1;
    public start_bit: Signal_$2;
    public length: Signal_$3;
    public endian: Signal_$4;
    public signed: Signal_$5;
    public factor: Signal_$6;
    public offset: Signal_$7;
    public min: Signal_$8;
    public max: Signal_$9;
    public raw_unit: Signal_$10;
    public raw_node_str: Signal_$11;
    public unit: string;
    public nodes: string[];
    constructor(name: Signal_$0, multiplex: Signal_$1, start_bit: Signal_$2, length: Signal_$3, endian: Signal_$4, signed: Signal_$5, factor: Signal_$6, offset: Signal_$7, min: Signal_$8, max: Signal_$9, raw_unit: Signal_$10, raw_node_str: Signal_$11){
        this.name = name;
        this.multiplex = multiplex;
        this.start_bit = start_bit;
        this.length = length;
        this.endian = endian;
        this.signed = signed;
        this.factor = factor;
        this.offset = offset;
        this.min = min;
        this.max = max;
        this.raw_unit = raw_unit;
        this.raw_node_str = raw_node_str;
        this.unit = ((): string => {
        return Array.from(raw_unit).filter(l=> l !== '"').toString() ;
        })();
        this.nodes = ((): string[] => {
        return raw_node_str.split(' ');
        })();
    }
}
export type Signal_$0 = string;
export type Signal_$1 = string;
export type Signal_$2 = string;
export type Signal_$3 = string;
export type Signal_$4 = string;
export type Signal_$5 = string;
export type Signal_$6 = string;
export type Signal_$7 = string;
export type Signal_$8 = string;
export type Signal_$9 = string;
export type Signal_$10 = string;
export type Signal_$11 = string;
export class ValTable {
    public kind: ASTKinds.ValTable = ASTKinds.ValTable;
    public name: ValTable_$0;
    public raw_table: ValTable_$1;
    public enum: Map<number,string>;
    constructor(name: ValTable_$0, raw_table: ValTable_$1){
        this.name = name;
        this.raw_table = raw_table;
        this.enum = ((): Map<number,string> => {
        return table2Enum(raw_table.replace(';',''));
        })();
    }
}
export type ValTable_$0 = string;
export type ValTable_$1 = string;
export class Val {
    public kind: ASTKinds.Val = ASTKinds.Val;
    public id: Val_$0;
    public name: Val_$1;
    public raw_table: Val_$2;
    public enum: Map<number,string>;
    constructor(id: Val_$0, name: Val_$1, raw_table: Val_$2){
        this.id = id;
        this.name = name;
        this.raw_table = raw_table;
        this.enum = ((): Map<number,string> => {
        return table2Enum(raw_table.replace(';',''));
        })();
    }
}
export type Val_$0 = string;
export type Val_$1 = string;
export type Val_$2 = string;
export class SignalComment {
    public kind: ASTKinds.SignalComment = ASTKinds.SignalComment;
    public id: SignalComment_$0;
    public name: SignalComment_$1;
    public raw_comment: SignalComment_$2;
    public comment: string;
    constructor(id: SignalComment_$0, name: SignalComment_$1, raw_comment: SignalComment_$2){
        this.id = id;
        this.name = name;
        this.raw_comment = raw_comment;
        this.comment = ((): string => {
        return cleanComment(raw_comment);
        })();
    }
}
export type SignalComment_$0 = string;
export type SignalComment_$1 = string;
export type SignalComment_$2 = string;
export class MessageComment {
    public kind: ASTKinds.MessageComment = ASTKinds.MessageComment;
    public id: MessageComment_$0;
    public raw_comment: MessageComment_$1;
    public comment: string;
    constructor(id: MessageComment_$0, raw_comment: MessageComment_$1){
        this.id = id;
        this.raw_comment = raw_comment;
        this.comment = ((): string => {
        return cleanComment(raw_comment);
        })();
    }
}
export type MessageComment_$0 = string;
export type MessageComment_$1 = string;
export class NodeComment {
    public kind: ASTKinds.NodeComment = ASTKinds.NodeComment;
    public name: NodeComment_$0;
    public raw_comment: NodeComment_$1;
    public comment: string;
    constructor(name: NodeComment_$0, raw_comment: NodeComment_$1){
        this.name = name;
        this.raw_comment = raw_comment;
        this.comment = ((): string => {
        return cleanComment(raw_comment);
        })();
    }
}
export type NodeComment_$0 = string;
export type NodeComment_$1 = string;
export class Parser {
    private readonly input: string;
    private pos: PosInfo;
    private negating: boolean = false;
    private memoSafe: boolean = true;
    constructor(input: string) {
        this.pos = {overallPos: 0, line: 1, offset: 0};
        this.input = input;
    }
    public reset(pos: PosInfo) {
        this.pos = pos;
    }
    public finished(): boolean {
        return this.pos.overallPos === this.input.length;
    }
    public clearMemos(): void {
    }
    public matchChoice($$dpth: number, $$cr?: ErrorTracker): Nullable<Choice> {
        return this.choice<Choice>([
            () => this.matchChoice_1($$dpth + 1, $$cr),
            () => this.matchChoice_2($$dpth + 1, $$cr),
            () => this.matchChoice_3($$dpth + 1, $$cr),
            () => this.matchChoice_4($$dpth + 1, $$cr),
            () => this.matchChoice_5($$dpth + 1, $$cr),
            () => this.matchChoice_6($$dpth + 1, $$cr),
            () => this.matchChoice_7($$dpth + 1, $$cr),
            () => this.matchChoice_8($$dpth + 1, $$cr),
        ]);
    }
    public matchChoice_1($$dpth: number, $$cr?: ErrorTracker): Nullable<Choice_1> {
        return this.matchNode($$dpth + 1, $$cr);
    }
    public matchChoice_2($$dpth: number, $$cr?: ErrorTracker): Nullable<Choice_2> {
        return this.matchMessage($$dpth + 1, $$cr);
    }
    public matchChoice_3($$dpth: number, $$cr?: ErrorTracker): Nullable<Choice_3> {
        return this.matchSignal($$dpth + 1, $$cr);
    }
    public matchChoice_4($$dpth: number, $$cr?: ErrorTracker): Nullable<Choice_4> {
        return this.matchValTable($$dpth + 1, $$cr);
    }
    public matchChoice_5($$dpth: number, $$cr?: ErrorTracker): Nullable<Choice_5> {
        return this.matchVal($$dpth + 1, $$cr);
    }
    public matchChoice_6($$dpth: number, $$cr?: ErrorTracker): Nullable<Choice_6> {
        return this.matchSignalComment($$dpth + 1, $$cr);
    }
    public matchChoice_7($$dpth: number, $$cr?: ErrorTracker): Nullable<Choice_7> {
        return this.matchMessageComment($$dpth + 1, $$cr);
    }
    public matchChoice_8($$dpth: number, $$cr?: ErrorTracker): Nullable<Choice_8> {
        return this.matchNodeComment($$dpth + 1, $$cr);
    }
    public matchNode($$dpth: number, $$cr?: ErrorTracker): Nullable<Node> {
        return this.run<Node>($$dpth,
            () => {
                let $scope$raw_node_string: Nullable<Node_$0>;
                let $$res: Nullable<Node> = null;
                if (true
                    && this.regexAccept(String.raw`(?:BU_:\s*)`, $$dpth + 1, $$cr) !== null
                    && ($scope$raw_node_string = this.matchNode_$0($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s*)`, $$dpth + 1, $$cr) !== null
                    && ((this.regexAccept(String.raw`(?:;)`, $$dpth + 1, $$cr)) || true)
                ) {
                    $$res = new Node($scope$raw_node_string);
                }
                return $$res;
            });
    }
    public matchNode_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<Node_$0> {
        return this.regexAccept(String.raw`(?:[a-zA-Z0-9_\s]*)`, $$dpth + 1, $$cr);
    }
    public matchMessage($$dpth: number, $$cr?: ErrorTracker): Nullable<Message> {
        return this.run<Message>($$dpth,
            () => {
                let $scope$id: Nullable<Message_$0>;
                let $scope$name: Nullable<Message_$1>;
                let $scope$dlc: Nullable<Message_$2>;
                let $scope$node: Nullable<Message_$3>;
                let $$res: Nullable<Message> = null;
                if (true
                    && this.regexAccept(String.raw`(?:BO_\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$id = this.matchMessage_$0($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s*)`, $$dpth + 1, $$cr) !== null
                    && ($scope$name = this.matchMessage_$1($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?::\s*)`, $$dpth + 1, $$cr) !== null
                    && ($scope$dlc = this.matchMessage_$2($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s*)`, $$dpth + 1, $$cr) !== null
                    && ($scope$node = this.matchMessage_$3($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.Message, id: $scope$id, name: $scope$name, dlc: $scope$dlc, node: $scope$node};
                }
                return $$res;
            });
    }
    public matchMessage_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<Message_$0> {
        return this.regexAccept(String.raw`(?:[0-9]+)`, $$dpth + 1, $$cr);
    }
    public matchMessage_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<Message_$1> {
        return this.regexAccept(String.raw`(?:[a-zA-Z0-9_]*)`, $$dpth + 1, $$cr);
    }
    public matchMessage_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<Message_$2> {
        return this.regexAccept(String.raw`(?:[0-9])`, $$dpth + 1, $$cr);
    }
    public matchMessage_$3($$dpth: number, $$cr?: ErrorTracker): Nullable<Message_$3> {
        return this.regexAccept(String.raw`(?:[a-zA-Z0-9_]*)`, $$dpth + 1, $$cr);
    }
    public matchSignal($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal> {
        return this.run<Signal>($$dpth,
            () => {
                let $scope$name: Nullable<Signal_$0>;
                let $scope$multiplex: Nullable<Signal_$1>;
                let $scope$start_bit: Nullable<Signal_$2>;
                let $scope$length: Nullable<Signal_$3>;
                let $scope$endian: Nullable<Signal_$4>;
                let $scope$signed: Nullable<Signal_$5>;
                let $scope$factor: Nullable<Signal_$6>;
                let $scope$offset: Nullable<Signal_$7>;
                let $scope$min: Nullable<Signal_$8>;
                let $scope$max: Nullable<Signal_$9>;
                let $scope$raw_unit: Nullable<Signal_$10>;
                let $scope$raw_node_str: Nullable<Signal_$11>;
                let $$res: Nullable<Signal> = null;
                if (true
                    && this.regexAccept(String.raw`(?:\s*SG_\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$name = this.matchSignal_$0($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s*)`, $$dpth + 1, $$cr) !== null
                    && ($scope$multiplex = this.matchSignal_$1($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s*:\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$start_bit = this.matchSignal_$2($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\|)`, $$dpth + 1, $$cr) !== null
                    && ($scope$length = this.matchSignal_$3($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:@)`, $$dpth + 1, $$cr) !== null
                    && ($scope$endian = this.matchSignal_$4($$dpth + 1, $$cr)) !== null
                    && ($scope$signed = this.matchSignal_$5($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s\()`, $$dpth + 1, $$cr) !== null
                    && ($scope$factor = this.matchSignal_$6($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:,)`, $$dpth + 1, $$cr) !== null
                    && ($scope$offset = this.matchSignal_$7($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\)\s\[)`, $$dpth + 1, $$cr) !== null
                    && ($scope$min = this.matchSignal_$8($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\|)`, $$dpth + 1, $$cr) !== null
                    && ($scope$max = this.matchSignal_$9($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\]\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$raw_unit = this.matchSignal_$10($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$raw_node_str = this.matchSignal_$11($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = new Signal($scope$name, $scope$multiplex, $scope$start_bit, $scope$length, $scope$endian, $scope$signed, $scope$factor, $scope$offset, $scope$min, $scope$max, $scope$raw_unit, $scope$raw_node_str);
                }
                return $$res;
            });
    }
    public matchSignal_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$0> {
        return this.regexAccept(String.raw`(?:[a-zA-Z0-9_]+)`, $$dpth + 1, $$cr);
    }
    public matchSignal_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$1> {
        return this.regexAccept(String.raw`(?:M|[m0-9]*|\s)`, $$dpth + 1, $$cr);
    }
    public matchSignal_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$2> {
        return this.regexAccept(String.raw`(?:[0-9]+)`, $$dpth + 1, $$cr);
    }
    public matchSignal_$3($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$3> {
        return this.regexAccept(String.raw`(?:[0-9]+)`, $$dpth + 1, $$cr);
    }
    public matchSignal_$4($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$4> {
        return this.regexAccept(String.raw`(?:[1|0])`, $$dpth + 1, $$cr);
    }
    public matchSignal_$5($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$5> {
        return this.regexAccept(String.raw`(?:[+|-])`, $$dpth + 1, $$cr);
    }
    public matchSignal_$6($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$6> {
        return this.regexAccept(String.raw`(?:[0-9.]+)`, $$dpth + 1, $$cr);
    }
    public matchSignal_$7($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$7> {
        return this.regexAccept(String.raw`(?:[0-9.]+)`, $$dpth + 1, $$cr);
    }
    public matchSignal_$8($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$8> {
        return this.regexAccept(String.raw`(?:[0-9.]+)`, $$dpth + 1, $$cr);
    }
    public matchSignal_$9($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$9> {
        return this.regexAccept(String.raw`(?:[0-9.]+)`, $$dpth + 1, $$cr);
    }
    public matchSignal_$10($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$10> {
        return this.regexAccept(String.raw`(?:".*")`, $$dpth + 1, $$cr);
    }
    public matchSignal_$11($$dpth: number, $$cr?: ErrorTracker): Nullable<Signal_$11> {
        return this.regexAccept(String.raw`(?:.*)`, $$dpth + 1, $$cr);
    }
    public matchValTable($$dpth: number, $$cr?: ErrorTracker): Nullable<ValTable> {
        return this.run<ValTable>($$dpth,
            () => {
                let $scope$name: Nullable<ValTable_$0>;
                let $scope$raw_table: Nullable<ValTable_$1>;
                let $$res: Nullable<ValTable> = null;
                if (true
                    && this.regexAccept(String.raw`(?:VAL_TABLE_\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$name = this.matchValTable_$0($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$raw_table = this.matchValTable_$1($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = new ValTable($scope$name, $scope$raw_table);
                }
                return $$res;
            });
    }
    public matchValTable_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<ValTable_$0> {
        return this.regexAccept(String.raw`(?:[a-zA-Z0-9_]+)`, $$dpth + 1, $$cr);
    }
    public matchValTable_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<ValTable_$1> {
        return this.regexAccept(String.raw`(?:.*)`, $$dpth + 1, $$cr);
    }
    public matchVal($$dpth: number, $$cr?: ErrorTracker): Nullable<Val> {
        return this.run<Val>($$dpth,
            () => {
                let $scope$id: Nullable<Val_$0>;
                let $scope$name: Nullable<Val_$1>;
                let $scope$raw_table: Nullable<Val_$2>;
                let $$res: Nullable<Val> = null;
                if (true
                    && this.regexAccept(String.raw`(?:VAL_\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$id = this.matchVal_$0($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$name = this.matchVal_$1($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$raw_table = this.matchVal_$2($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = new Val($scope$id, $scope$name, $scope$raw_table);
                }
                return $$res;
            });
    }
    public matchVal_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<Val_$0> {
        return this.regexAccept(String.raw`(?:[0-9]+)`, $$dpth + 1, $$cr);
    }
    public matchVal_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<Val_$1> {
        return this.regexAccept(String.raw`(?:[a-zA-Z0-9_]+)`, $$dpth + 1, $$cr);
    }
    public matchVal_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<Val_$2> {
        return this.regexAccept(String.raw`(?:.*)`, $$dpth + 1, $$cr);
    }
    public matchSignalComment($$dpth: number, $$cr?: ErrorTracker): Nullable<SignalComment> {
        return this.run<SignalComment>($$dpth,
            () => {
                let $scope$id: Nullable<SignalComment_$0>;
                let $scope$name: Nullable<SignalComment_$1>;
                let $scope$raw_comment: Nullable<SignalComment_$2>;
                let $$res: Nullable<SignalComment> = null;
                if (true
                    && this.regexAccept(String.raw`(?:CM_ SG_\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$id = this.matchSignalComment_$0($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$name = this.matchSignalComment_$1($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$raw_comment = this.matchSignalComment_$2($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = new SignalComment($scope$id, $scope$name, $scope$raw_comment);
                }
                return $$res;
            });
    }
    public matchSignalComment_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<SignalComment_$0> {
        return this.regexAccept(String.raw`(?:[0-9]+)`, $$dpth + 1, $$cr);
    }
    public matchSignalComment_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<SignalComment_$1> {
        return this.regexAccept(String.raw`(?:[a-zA-Z0-9_]+)`, $$dpth + 1, $$cr);
    }
    public matchSignalComment_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<SignalComment_$2> {
        return this.regexAccept(String.raw`(?:.*)`, $$dpth + 1, $$cr);
    }
    public matchMessageComment($$dpth: number, $$cr?: ErrorTracker): Nullable<MessageComment> {
        return this.run<MessageComment>($$dpth,
            () => {
                let $scope$id: Nullable<MessageComment_$0>;
                let $scope$raw_comment: Nullable<MessageComment_$1>;
                let $$res: Nullable<MessageComment> = null;
                if (true
                    && this.regexAccept(String.raw`(?:CM_ BO_\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$id = this.matchMessageComment_$0($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$raw_comment = this.matchMessageComment_$1($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = new MessageComment($scope$id, $scope$raw_comment);
                }
                return $$res;
            });
    }
    public matchMessageComment_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<MessageComment_$0> {
        return this.regexAccept(String.raw`(?:[0-9]+)`, $$dpth + 1, $$cr);
    }
    public matchMessageComment_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<MessageComment_$1> {
        return this.regexAccept(String.raw`(?:.*)`, $$dpth + 1, $$cr);
    }
    public matchNodeComment($$dpth: number, $$cr?: ErrorTracker): Nullable<NodeComment> {
        return this.run<NodeComment>($$dpth,
            () => {
                let $scope$name: Nullable<NodeComment_$0>;
                let $scope$raw_comment: Nullable<NodeComment_$1>;
                let $$res: Nullable<NodeComment> = null;
                if (true
                    && this.regexAccept(String.raw`(?:CM_ BU_\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$name = this.matchNodeComment_$0($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\s)`, $$dpth + 1, $$cr) !== null
                    && ($scope$raw_comment = this.matchNodeComment_$1($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = new NodeComment($scope$name, $scope$raw_comment);
                }
                return $$res;
            });
    }
    public matchNodeComment_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<NodeComment_$0> {
        return this.regexAccept(String.raw`(?:[a-zA-Z0-9_]+)`, $$dpth + 1, $$cr);
    }
    public matchNodeComment_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<NodeComment_$1> {
        return this.regexAccept(String.raw`(?:.*)`, $$dpth + 1, $$cr);
    }
    public test(): boolean {
        const mrk = this.mark();
        const res = this.matchChoice(0);
        const ans = res !== null;
        this.reset(mrk);
        return ans;
    }
    public parse(): ParseResult {
        const mrk = this.mark();
        const res = this.matchChoice(0);
        if (res)
            return {ast: res, errs: []};
        this.reset(mrk);
        const rec = new ErrorTracker();
        this.clearMemos();
        this.matchChoice(0, rec);
        const err = rec.getErr()
        return {ast: res, errs: err !== null ? [err] : []}
    }
    public mark(): PosInfo {
        return this.pos;
    }
    private loop<T>(func: $$RuleType<T>, star: boolean = false): Nullable<T[]> {
        const mrk = this.mark();
        const res: T[] = [];
        for (;;) {
            const t = func();
            if (t === null) {
                break;
            }
            res.push(t);
        }
        if (star || res.length > 0) {
            return res;
        }
        this.reset(mrk);
        return null;
    }
    private run<T>($$dpth: number, fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn()
        if (res !== null)
            return res;
        this.reset(mrk);
        return null;
    }
    private choice<T>(fns: Array<$$RuleType<T>>): Nullable<T> {
        for (const f of fns) {
            const res = f();
            if (res !== null) {
                return res;
            }
        }
        return null;
    }
    private regexAccept(match: string, dpth: number, cr?: ErrorTracker): Nullable<string> {
        return this.run<string>(dpth,
            () => {
                const reg = new RegExp(match, "y");
                const mrk = this.mark();
                reg.lastIndex = mrk.overallPos;
                const res = this.tryConsume(reg);
                if(cr) {
                    cr.record(mrk, res, {
                        kind: "RegexMatch",
                        // We substring from 3 to len - 1 to strip off the
                        // non-capture group syntax added as a WebKit workaround
                        literal: match.substring(3, match.length - 1),
                        negated: this.negating,
                    });
                }
                return res;
            });
    }
    private tryConsume(reg: RegExp): Nullable<string> {
        const res = reg.exec(this.input);
        if (res) {
            let lineJmp = 0;
            let lind = -1;
            for (let i = 0; i < res[0].length; ++i) {
                if (res[0][i] === "\n") {
                    ++lineJmp;
                    lind = i;
                }
            }
            this.pos = {
                overallPos: reg.lastIndex,
                line: this.pos.line + lineJmp,
                offset: lind === -1 ? this.pos.offset + res[0].length : (res[0].length - lind - 1)
            };
            return res[0];
        }
        return null;
    }
    private noConsume<T>(fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn();
        this.reset(mrk);
        return res;
    }
    private negate<T>(fn: $$RuleType<T>): Nullable<boolean> {
        const mrk = this.mark();
        const oneg = this.negating;
        this.negating = !oneg;
        const res = fn();
        this.negating = oneg;
        this.reset(mrk);
        return res === null ? true : null;
    }
    private memoise<K>(rule: $$RuleType<K>, memo: Map<number, [Nullable<K>, PosInfo]>): Nullable<K> {
        const $scope$pos = this.mark();
        const $scope$memoRes = memo.get($scope$pos.overallPos);
        if(this.memoSafe && $scope$memoRes !== undefined) {
        this.reset($scope$memoRes[1]);
        return $scope$memoRes[0];
        }
        const $scope$result = rule();
        if(this.memoSafe)
        memo.set($scope$pos.overallPos, [$scope$result, this.mark()]);
        return $scope$result;
    }
}
export function parse(s: string): ParseResult {
    const p = new Parser(s);
    return p.parse();
}
export interface ParseResult {
    ast: Nullable<Choice>;
    errs: SyntaxErr[];
}
export interface PosInfo {
    readonly overallPos: number;
    readonly line: number;
    readonly offset: number;
}
export interface RegexMatch {
    readonly kind: "RegexMatch";
    readonly negated: boolean;
    readonly literal: string;
}
export type EOFMatch = { kind: "EOF"; negated: boolean };
export type MatchAttempt = RegexMatch | EOFMatch;
export class SyntaxErr {
    public pos: PosInfo;
    public expmatches: MatchAttempt[];
    constructor(pos: PosInfo, expmatches: MatchAttempt[]) {
        this.pos = pos;
        this.expmatches = [...expmatches];
    }
    public toString(): string {
        return `Syntax Error at line ${this.pos.line}:${this.pos.offset}. Expected one of ${this.expmatches.map(x => x.kind === "EOF" ? " EOF" : ` ${x.negated ? 'not ': ''}'${x.literal}'`)}`;
    }
}
class ErrorTracker {
    private mxpos: PosInfo = {overallPos: -1, line: -1, offset: -1};
    private regexset: Set<string> = new Set();
    private pmatches: MatchAttempt[] = [];
    public record(pos: PosInfo, result: any, att: MatchAttempt) {
        if ((result === null) === att.negated)
            return;
        if (pos.overallPos > this.mxpos.overallPos) {
            this.mxpos = pos;
            this.pmatches = [];
            this.regexset.clear()
        }
        if (this.mxpos.overallPos === pos.overallPos) {
            if(att.kind === "RegexMatch") {
                if(!this.regexset.has(att.literal))
                    this.pmatches.push(att);
                this.regexset.add(att.literal);
            } else {
                this.pmatches.push(att);
            }
        }
    }
    public getErr(): SyntaxErr | null {
        if (this.mxpos.overallPos !== -1)
            return new SyntaxErr(this.mxpos, this.pmatches);
        return null;
    }
}