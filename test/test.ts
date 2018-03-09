import { suite, test, slow, timeout, retries } from "mocha-typescript";
import { assert } from "chai";

@suite(retries(2))
class Suite {
    static tries1 = 0;
    static tries2 = 1;
    @test first() {
        assert.isAbove(Suite.tries2++, 2);
    }
    @test(retries(5)) second() {
        assert.isAbove(Suite.tries1++, 3);
    }
}